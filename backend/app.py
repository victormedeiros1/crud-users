import mysql.connector

connection = mysql.connector.connect(user='root', password='secret', host='localhost', port='3306', database='db_users')

print('DB CONNECTED')
cursor = connection.cursor()
cursor.execute('SELECT * FROM TB_USERS')
users = cursor.fetchall()
connection.close()

# print(users)

from flask import Flask 
app = Flask('crud-users-backend') 

@app.route('/')
def index():
    return users

app.run(port = 5000, host='localhost', debug=True)