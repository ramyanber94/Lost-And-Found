import pymongo


def generateMongoClient():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["lostAndFound"]
    return mydb
