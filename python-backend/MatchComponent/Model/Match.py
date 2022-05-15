class User:
    matchObject = {
        'foundId': '',
        'lostId': '',
        'foundItem': ''
    }

    def __init__(self, body):
        self.matchObject = body
