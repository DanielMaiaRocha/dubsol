import smtplib
from flask import Flask, jsonify, request
from flask_cors import CORS
import db_interaction as dbi
import imaplib
import os
from dotenv import load_dotenv
import email
from email.header import decode_header
from email.message import EmailMessage 


load_dotenv()

app = Flask(__name__)
CORS(app)

def enviar_email(remetente, destinatario, assunto, corpo):
    try:
        msg = EmailMessage()
        msg['From'] = remetente
        msg['To'] = destinatario
        msg['Subject'] = assunto
        msg.set_content(corpo)

        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
            smtp.login(os.getenv('SMTP_USER'), os.getenv('SMTP_PASSWORD'))
            smtp.send_message(msg)

        return {"status": "E-mail enviado com sucesso"}

    except Exception as e:
        return {"erro": str(e)}

@app.route('/api/emails', methods=['GET'])
def listar_emails():
    return jsonify()

@app.route('/api/send-email', methods=['POST'])
def send_email():
    data = request.get_json()
    remetente = os.getenv('SMTP_USER')  
    destinatario = data['destinatario']
    assunto = data['assunto']
    corpo = data['corpo']

    enviar_email(remetente, destinatario, assunto, corpo)

    return jsonify('Email enviado com sucesso!')
    

if __name__ == '__main__':
    app.run(debug=True)
    
    