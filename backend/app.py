import mysql.connector
import json

connection = mysql.connector.connect(user='root', password='secret', host='localhost', port='3306', database='db_users')

print('DB CONNECTED')
cursor = connection.cursor()
# cursor.execute('SELECT * FROM TB_USERS')
# users = cursor.fetchall()
# connection.close()

# print(users)

from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask('crud-users-backend') 
CORS(app)

@app.route('/')
def index():
    return users

@app.route('/auth', methods=['POST'])
def auth():
    data = request.get_json()
    login = data['login']
    password = data['password']
    
    cursor.execute(f"SELECT * FROM TB_USERS WHERE (USE_EMAIL = '{login}' OR USE_CPF = '{login}' OR USE_PIS = '{login}') AND USE_PASSWORD = '{password}';")

    rows = cursor.fetchall()
    keys = ('id', 'name', 'country', 'state', 'city', 'cep', 'street', 'number', 'complement', 'cpf', 'pis', 'password')

    result = []
    for row in rows:
        result.append(dict(zip(keys, row)))

    # Serialize the result to JSON
    artificialJson = json.dumps(result)

    return artificialJson

@app.route('/create-user', methods=['POST'])
def createUser():
    data = request.get_json()
    name = data['name']
    email = data['email']
    country = data['address']['country']
    state = data['address']['state']
    city = data['address']['city']
    cep = data['address']['cep']
    street = data['address']['street']
    number = data['address']['number']
    complement = data['address']['complement']
    cpf = data['cpf']
    pis = data['pis']
    password = data['password']

    cursor.execute(
        f"INSERT INTO TB_USERS(USE_NAME, USE_EMAIL, USE_COUNTRY, USE_STATE, USE_CITY, USE_CEP, USE_STREET, USE_NUMBER, USE_COMPLEMENT, USE_CPF, USE_PIS, USE_PASSWORD) VALUES('{name}', '{email}', '{country}', '{state}', '{city}', '{cep}', '{street}', '{number}', '{complement}', '{pis}', '{cpf}', '{password}')")
    connection.commit()
    
    return 'REQUISIÇÃO BEM SUCEDIDA'
app.run(port = 5000, host='localhost', debug=True)