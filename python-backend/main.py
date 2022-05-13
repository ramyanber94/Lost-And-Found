from flask import Flask, request, json
from Controllers.UserController import UserController
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)

app = Flask(__name__)


@app.route("/")
def home():
    print('dsadsa')
    return "Hello, Flask!"


@app.route('/api/register/', methods=['POST'])
def register():
    body = json.loads(request.data)
    res = UserController.controlReg(body)
    response = {'response': res}
    return response


@app.route('/api/login/', methods=['POST'])
def login():
    body = json.loads(request.data)
    res = UserController.controlLog(body)
    response = {'response': res}
    return response


app.run()
