import pymongo
from dbConfig import generateMongoClient

mydb = generateMongoClient()


class FoundDb:

    def insertFound(self):
        mycol = mydb["Found"]
        try:
            mycol.insert_one({'data': self}).inserted_id
            return True
        except pymongo.errors.OperationFailure as e:
            return False

    def getFound(self):
        mycol = mydb["Lost"]
        x = mycol.find({"data.email": self['email'], "data.password": self['password']})
        for data in x:
            if data:
                return True
            else:
                return False