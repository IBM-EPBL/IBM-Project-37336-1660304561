from __future__ import print_function
from flask import Flask, request, json, jsonify
from flask_json import FlaskJSON, json_response
from flask_cors import CORS
import ibm_db

# Initializing flask app
app = Flask(__name__)
jsonObj = FlaskJSON(app)
cors = CORS(app,resources={r'*':{'origins':'http://localhost:3000'}})

conn=ibm_db.connect("DATABASE=bludb;HOSTNAME=0c77d6f2-5da9-48a9-81f8-86b520b87518.bs2io90l08kqb1od8lcg.databases.appdomain.cloud;PORT=31198;Security=SSL;SSLServerCertificate=DigiCertGlobalRootCA.crt;UID=txm14386;PWD=SuJ9Kf0eIJGynsB9;","","")

# Route for seeing a data
@app.route('/login')
def login():
    email = request.args.get('email')
    password = request.args.get('password')
    sql = "SELECT * FROM login where email ='{}'".format(email) 
    out = ibm_db.exec_immediate(conn, sql) 
    document = ibm_db.fetch_assoc(out)
    if document == False :
        response = json_response(value=0)
    elif document['PASSWORD'] == password :
        response = json_response(value=1)
    else :
        response = json_response(value=2)
    return response
  
@app.route('/register',methods=['POST'])
def register():
    if request.method == "POST":
        credentials = json.loads(request.data)
        sql = "INSERT INTO login VALUES('{}','{}')".format(credentials['email'],credentials['password']) 
        out = ibm_db.exec_immediate(conn, sql) 
        response = json_response(200)
        return response 


# Running app
if __name__ == '__main__':
    app.run(debug=True)