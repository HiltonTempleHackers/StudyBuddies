from database import Database, Session, Student

mydb = Database()

sesh = Session('le petit groupe de francais', 'French', 'temple', 3, '10-19-2019')
mydb.addSession(sesh)
sesh = Session('le grand groupe de francais', 'French', 'temple', 10, '10-19-2019')
mydb.addSession(sesh)
sesh = Session('calculus clowns', 'Math', 'temple', 5, '10-19-2019')
mydb.addSession(sesh)
sesh = Session('mighty math hour', 'Math', 'temple', 10, '10-20-2019')
mydb.addSession(sesh)
sesh = Session('bio bros', 'Biology', 'temple', 4, '10-20-2019')
mydb.addSession(sesh)

print(mydb.findSessions(['French', 4, 10, '10-19-2019']))
