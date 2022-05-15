import pymongo
from dbConfig import generateMongoClient
import json

mydb = generateMongoClient()


class UserDb:

    def insertUser(self):
        mycol = mydb["User"]
        try:
            mycol.insert_one({'data': self}).inserted_id
            x = mycol.find({"data": self})
            if x:
                for data in x:
                    if data:
                        dataStr = json.dumps(data['_id'], default=str)
                        return dataStr
                    else:
                        return False
            else:
                pass
        except pymongo.errors.OperationFailure as e:
            return False

    def getUser(self):
        mycol = mydb["User"]
        x = mycol.find({"data.email": self['email'], "data.password": self['password']})
        if x:
            for data in x:
                if data:
                    dataStr = json.dumps(data['_id'], default=str)
                    return dataStr
                else:
                    return False
        else:
            pass
