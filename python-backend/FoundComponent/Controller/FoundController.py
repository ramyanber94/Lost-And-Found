from FoundComponent.Model.Found import Found
from FoundComponent.Db.FoundDb import FoundDb


class FoundController:

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
            return res
        else:
            return 'failed'
