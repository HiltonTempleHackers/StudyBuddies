from database import Database, Session, Student
import datetime as dt

mydb = Database()

sesh = Session('le petit groupe de francais', 'French', 'temple', 3, dt.datetime(2019, 10, 19))
mydb.addSession(sesh)
sesh = Session('le grand groupe de francais', 'French', 'temple', 10, dt.datetime(2019, 10, 21))
mydb.addSession(sesh)
sesh = Session('calculus clowns', 'Math', 'temple', 5, dt.datetime(2019, 10, 23))
mydb.addSession(sesh)
sesh = Session('mighty math hour', 'Math', 'temple', 10, dt.datetime(2019, 10, 19))
mydb.addSession(sesh)
sesh = Session('bio bros', 'Biology', 'temple', 4, dt.datetime(2019, 10, 19))
mydb.addSession(sesh)

lst = mydb.findSessions(['French', 3, 10, dt.datetime(2019, 10, 19)])
for i in lst:
    i.__str__()
