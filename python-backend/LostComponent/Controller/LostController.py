from LostComponent.Model.Lost import Lost
from LostComponent.Db.LostDb import LostDb


class LostController:

    def insertRecord(self):
        lost = Lost(self)
        res = LostDb.insertLost(lost.lostObject)
        if res:
            return 'success'
        else:
            return 'failed'

    def getRecord(self):
        res = LostDb.getLost(self)
        if res:
            return res
        else:
            return 'failed'
