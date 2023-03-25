import mysql.connector

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

    data = request.get_json()
    print(name) 
    print(email) 
    print(country)
    print(state)
    print(city)
    print(cep)
    print(street)
    print(number)
    print(complement)
    print(cpf) 
    print(pis) 
    print(password) 

    cursor.execute(
        f"INSERT INTO TB_USERS(USE_NAME, USE_EMAIL, USE_COUNTRY, USE_STATE, USE_CITY, USE_CEP, USE_STREET, USE_NUMBER, USE_COMPLEMENT, USE_CPF, USE_PIS, USE_PASSWORD) VALUES('{name}', '{email}', '{country}', '{state}', '{city}', '{cep}', '{street}', '{number}', '{complement}', '{pis}', '{cpf}', '{password}')")
    connection.commit()
    
    return 'REQUISIÇÃO BEM SUCEIDADE'
app.run(port = 5000, host='localhost', debug=True)