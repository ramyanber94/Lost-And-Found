class User:
    userObject = {
        'name': '',
        'phoneNumber': '',
        'email': '',
        'password': ''
    }

    def __init__(self, body):
        self.userObject = body
