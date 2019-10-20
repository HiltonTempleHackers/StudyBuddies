from database import Database, Session, Student
import datetime as dt

mydb = Database()

stud = Student('wow@gmail.com', '1234', 'wilson', 'd', 'temple', 'junior', 'ist')
mydb.addStudent(stud)
stud = Student('wee@gmail.com', '1234', 'jack', 'daniels', 'temple', 'senior', 'cs')
mydb.addStudent(stud)
stud = Student('zoop@gmail.com', '1234', 'hoop', 'farm', 'temple', 'freshman', 'cj')
mydb.addStudent(stud)


sesh = Session('le petit groupe de francais', 'French', 'temple', 3, dt.datetime(2019, 10, 19))
mydb.addSession(sesh)
sesh.addStudent(mydb.studentDict['wow@gmail.com'])
sesh.addStudent(mydb.studentDict['zoop@gmail.com'])

sesh = Session('le grand groupe de francais', 'French', 'temple', 10, dt.datetime(2019, 10, 21))
mydb.addSession(sesh)

sesh = Session('calculus clowns', 'Math', 'temple', 5, dt.datetime(2019, 10, 22))
mydb.addSession(sesh)
sesh.addStudent(mydb.studentDict['wee@gmail.com'])

sesh = Session('mighty math hour', 'Math', 'temple', 10, dt.datetime(2019, 10, 19))
mydb.addSession(sesh)

sesh = Session('bio bros', 'Biology', 'temple', 4, dt.datetime(2019, 10, 19))
mydb.addSession(sesh)

lst = mydb.findSessions(['Math', 3, 10, dt.datetime(2019, 10, 19)])
for i in lst:
    i.__str__()
    i.showStudents()
