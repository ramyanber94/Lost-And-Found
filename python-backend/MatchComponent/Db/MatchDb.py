from dbConfig import generateMongoClient

mydb = generateMongoClient()


def getMatches():
    mycol = mydb["Lost"]
    pipeline = [{'$lookup':
                     {'from': 'Found',
                      'localField': 'data.fullName',
                      'foreignField': 'data.fullName',
                      'as': 'same'}},
                {'$match':
                     {"same": { '$ne': [] }}}]

    for doc in (mycol.aggregate(pipeline)):
        print(doc)

