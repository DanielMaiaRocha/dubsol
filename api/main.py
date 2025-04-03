from flask import Flask, jsonify, request
from flask_cors import CORS
import db_interaction as dbi

app = Flask(__name__)
CORS(app)

@app.route('/emailmessage', methods=['POST'])
def patient_register():
    remetente = request.json.get('email_remetente')
    destinatario = request.json.get('email_destinatario')
    menssagem = request.json.get('mensagem')


    try:
        #Insere o novo paciente, associando-o à unidade do usuário logado
        dbi.message_log(remetente, destinatario, menssagem)  # Insere o novo paciente no banco de dados


        return jsonify({"status": "success", "message": "Mensagem enviada com sucesso!"}), 201  # Retorna sucesso com status 201

    except Exception as e:
        return jsonify({"status": "error", "message": f"Erro: {str(e)}"}), 500  # Erro interno do servidor
    