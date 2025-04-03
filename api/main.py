from flask import Flask, jsonify, request
from flask_cors import CORS
import db_interaction as dbi
import imaplib
import os
from dotenv import load_dotenv
import email
from email.header import decode_header

load_dotenv()

app = Flask(__name__)
CORS(app)

def receber_emails():
    try:
        servidor = imaplib.IMAP4_SSL("imap.gmail.com")
        servidor.login(os.getenv('SMTP_USER'), os.getenv('SMTP_PASSWORD'))
        servidor.select("inbox")
        destinatario = os.getenv('SMTP_USER')
        
        # Buscar e-mails não lidos
        status, mensagens = servidor.search(None, 'UNSEEN')
        mensagens = mensagens[0].split()

        emails = []

        for num in mensagens:
            status, msg_data = servidor.fetch(num, "(RFC822)")

            for response_part in msg_data:
                if isinstance(response_part, tuple):
                    msg = email.message_from_bytes(response_part[1])
                    remetente = msg.get("From")
                    assunto, encoding = decode_header(msg.get("Subject"))[0]
                    if isinstance(assunto, bytes):
                        assunto = assunto.decode(encoding if encoding else "utf-8")

                    corpo = ""
                    if msg.is_multipart():
                        for part in msg.walk():
                            if part.get_content_type() == "text/plain":
                                corpo = part.get_payload(decode=True).decode()
                                break
                    else:
                        corpo = msg.get_payload(decode=True).decode()
                    
                    dbi.message_log(remetente, corpo, assunto, destinatario)  # Insere o novo paciente no banco de dados


                    emails.append({
                        "remetente": remetente,
                        "assunto": assunto,
                        "corpo": corpo
                    })

        servidor.close()
        servidor.logout()

        return emails

    except Exception as e:
        return [{"erro": str(e)}]

@app.route('/api/emails', methods=['GET'])
def listar_emails():
    emails = receber_emails()
    return jsonify(emails)

if __name__ == '__main__':
    app.run(debug=True)