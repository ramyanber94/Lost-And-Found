from Models.Found import Found
from Db.FoundDb import FoundDb


class LostController:

    def insertRecord(self):
        found = Found(self)
        res = FoundDb.insertFound(found.foundObject)
        if res:
            return 'success'
        else:
            return 'failed'

    def getRecord(self):
        res = FoundDb.getFound(self)
        if res:
            return 'success'
        else:
            return 'failed'
