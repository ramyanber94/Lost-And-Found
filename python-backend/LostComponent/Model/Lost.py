class Lost:
    lostObject = {
        'id': '',
        'fullName': '',
        'nationalCardId': '',
        'bankCardId': ''
    }

    def __init__(self, body):
        self.lostObject = body
