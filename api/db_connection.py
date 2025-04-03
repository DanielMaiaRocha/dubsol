import mysql.connector
from mysql.connector import Error
from dotenv import load_dotenv
import os

load_dotenv()

def criar_conexao():
    """Estabelece uma conexão com o banco de dados MySQL."""
    try:
        conn = mysql.connector.connect(
            host= os.getenv('MYSQL_HOST'),    # Substitua pelo seu host
            user=os.getenv('MYSQL_USER'),  # Substitua pelo seu usuário
            password=os.getenv('MYSQL_PASSWORD'),# Substitua pela sua senha
            database=os.getenv('MYSQL_DB')  # Substitua pelo nome do seu banco de dados
        )
        if conn.is_connected():
            #print('Conexão ao banco de dados estabelecida com sucesso.')
            return conn
    except Error as e:
        print(f"Erro ao conectar ao banco de dados: {e}")
        return None

def fechar_conexao(conn):
    """Fecha a conexão com o banco de dados MySQL."""
    conn.close()
        # print('Conexão ao banco de dados encerrada.')