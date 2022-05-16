class Found:
    foundObject = {
        'id': '',
        'fullName': '',
        'nationalCardId': '',
        'bankCardId': ''
    }

    def __init__(self, body):
        self.foundObject = body
