import pymongo
from dbConfig import generateMongoClient

mydb = generateMongoClient()


class LostDb:

    def insertLost(self):
        mycol = mydb["Lost"]
        try:
            mycol.insert_one({'data': self}).inserted_id
            return True
        except pymongo.errors.OperationFailure as e:
            return False

    def getLost(self):
        mycol = mydb["Lost"]
        x = mycol.find()
        arrayOfLosts = []
        for data in x:
            if data:
                arrayOfLosts.append(data)
            else:
                return False
        return arrayOfLosts
