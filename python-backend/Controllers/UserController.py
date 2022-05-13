from Models.User import User
from Db.UserDb import UserDb


class UserController:

    def controlReg(self):
        user = User(self)
        res = UserDb.insertUser(user.userObject)
        if res:
            return 'success'
        else:
            return 'failed'

    def controlLog(self):
        res = UserDb.getUser(self)
        if res:
            return res
        else:
            return 'failed'
