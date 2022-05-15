from flask import Flask, request, json
from flask_cors import CORS
from UserComponent.Controller.UserController import UserController
from LostComponent.Controller.LostController import LostController
from FoundComponent.Controller.FoundController import FoundController
from MatchComponent.Controller.MatchController import getMatches
from apscheduler.schedulers.background import BackgroundScheduler

app = Flask(__name__)
cors = CORS(app)

app = Flask(__name__)


def sensor():
    getMatches()


sched = BackgroundScheduler(daemon=True)
sched.add_job(sensor, 'interval', seconds=5)
sched.start()


@app.route("/")
def home():
    return ""


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


@app.route('/api/lost/', methods=['POST'])
def lost():
    body = json.loads(request.data)
    res = LostController.insertRecord(body)
    response = {'response': res}
    return response


@app.route('/api/found/', methods=['POST'])
def found():
    body = json.loads(request.data)
    res = FoundController.insertRecord(body)
    response = {'response': res}
    return response


app.run()
