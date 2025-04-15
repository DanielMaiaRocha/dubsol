import smtplib
from flask import Flask, jsonify, request
from flask_cors import CORS
import os
from dotenv import load_dotenv
from email.message import EmailMessage 
import db_interaction as dbi

load_dotenv()

app = Flask(__name__)
CORS(app)

def enviar_email(remetente_cliente, assunto, corpo):
    try:
        msg = EmailMessage()
        msg['From'] = remetente_cliente
        msg['To'] = os.getenv('SMTP_USER')  # e-mail da equipe que vai receber
        msg['Subject'] = assunto

        # Adiciona o e-mail do cliente no corpo para a equipe saber quem enviou
        msg.set_content(f"E-mail enviado por: {remetente_cliente}\n\n{corpo}")

        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
            smtp.login(os.getenv('SMTP_USER'), os.getenv('SMTP_PASSWORD'))
            smtp.send_message(msg)

        # dbi.message_log( corpo, assunto, remetente_cliente)  # Log da mensagem no banco de dados

        return {"status": "E-mail enviado com sucesso"}

    except Exception as e:
        return {"erro": str(e)}

@app.route('/api/send-email', methods=['POST'])
def send_email():
    data = request.get_json()

    remetente_cliente = data.get('email')      # e-mail da pessoa que preencheu o formulário
    assunto = data.get('assunto')  # opcional: assunto customizável
    corpo = data.get('mensagem')

    resultado = enviar_email(remetente_cliente, assunto, corpo)

    return jsonify(resultado)


if __name__ == '__main__':
    app.run(debug=True)
