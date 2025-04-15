from db_connection import criar_conexao, fechar_conexao
import datetime
import tzlocal

local_tz = tzlocal.get_localzone()

def message_log(corpo, assunto, remetente):
    conn = criar_conexao()  # Conexão criada dentro da função
    cursor = conn.cursor()

    try:
        # Obter o timestamp atual
        timestamp = datetime.datetime.now(local_tz).strftime('%Y-%m-%d %H:%M:%S')

        # Inserir a mensagem no banco de dados
        sql = "INSERT INTO email_messages (sender, subject, message, timestamp) VALUES (%s, %s, %s, %s)"
        cursor.execute(sql, (remetente, assunto, corpo, timestamp))

        # Commit da transação
        conn.commit()
        print("Mensagem registrada com sucesso.")
    
    except Exception as e:
        print(f"Erro ao registrar mensagem: {e}")
        conn.rollback()  # Desfaz qualquer alteração em caso de erro
        return False

    finally:
        cursor.close()
        fechar_conexao(conn)  # Fecha a conexão após o commit