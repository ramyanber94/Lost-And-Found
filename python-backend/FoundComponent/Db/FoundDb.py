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
        x = mycol.find()
        arrayOfFounds = []
        for data in x:
            if data:
                arrayOfFounds.append(data)
            else:
                return False
        return arrayOfFounds
