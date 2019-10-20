from flask import Flask, render_template, url_for, request, redirect
from classes import session as sesh
from classes import student as st
from classes import database as db
import json
import requests
import datetime

app = Flask(__name__)

#persistent
mainDB = db.Database()

@app.route('/register', methods=['POST', 'GET'])
def register():
    if request.method == 'POST':
        # pass
        # task_content = request.form.get('content') #request.form content type = ImmutableMultiDict; get returns String

        email = request.form.get('email')
        password = request.form.get('password')
        firstName = request.form.get('firstName')
        lastName = request.form.get('lastName')
        school = request.form.get('school')
        year = request.form.get('year')
        major = request.form.get('major')

        thisStudent = st.Student(email, password, firstName, lastName, school, year, major)
        mainDB.addStudent(thisStudent)

        '''headers = {'your_header_title': 'your_header'}
        # In you case: headers = {'content-type': 'application/json'}
        r = requests.post("your_url", headers=headers, data=your_data)'''

        return mainDB.studentDict[email].__str__()
    else:
        return render_template('register.html')

@app.route('/login', methods=['POST', 'GET'])
def login():
    if request.method == 'POST':
        # pass
        # task_content = request.form.get('content') #request.form content type = ImmutableMultiDict; get returns String

        email = request.form.get('email')
        password = request.form.get('password')

        return mainDB.validateStudent(email, password)
        #return mainDB.studentDict[email].__str__()
    else:
        return render_template('login.html')

@app.route('/createSession', methods=['POST', 'GET'])
def createSession():
    if request.method == 'POST':

        title = request.form.get('title')
        subject = request.form.get('subject')
        school = request.form.get('school')
        maxSize = request.form.get('maxSize')
        date = request.form.get('date')

        thisSession = sesh.Session(title, subject, school, maxSize, date)
        mainDB.addSession(thisSession)

        returnList = []

        for i in mainDB.subjectsToSessions[subject]:
            returnList.append(i.__str__())

        return returnList.__str__()

    else:
        return render_template('createSession.html')

@app.route('/joinSession', methods=['POST', 'GET'])
def joinSession():
    if request.method == 'POST':

        subject = request.form.get('subject')
        minSize = request.form.get('minSize')
        maxSize = request.form.get('maxSize')
        date = request.form.get('date')
        date = date.split('-')

        year = int(date[0])
        month = int(date[1])
        day = int(date[2])

        preferences = [subject, int(minSize), int(maxSize), datetime.datetime(year,month,day)]

        returnList = []

        #for each session in found sessions:
        for session in mainDB.findSessions(preferences):
            returnList.append(session.__str__())

        # return date
        return returnList.__str__()
    else:
        return render_template('joinSession.html')



@app.route('/profile', methods=['POST', 'GET'])
def profile():
    if request.method == 'POST':
        # pass
        # task_content = request.form.get('content') #request.form content type = ImmutableMultiDict; get returns String

        #requests.post("http://127.0.0.1:5000/determine_escalation/", json=s).json()

        return mainDB.validateStudent(email, password)
        #return mainDB.studentDict[email].__str__()
    else:
        return render_template('profile.html')

@app.route('/feed', methods=['POST', 'GET'])
def feed():
    if request.method == 'POST':
        # pass
        # task_content = request.form.get('content') #request.form content type = ImmutableMultiDict; get returns String

        email = request.form.get('email')
        password = request.form.get('password')

        return mainDB.validateStudent(email, password)
        #return mainDB.studentDict[email].__str__()
    else:
        return render_template('feed.html')

@app.route('/sessionDetails', methods=['POST', 'GET'])
def sessionDetails():
    if request.method == 'POST':
        # pass
        # task_content = request.form.get('content') #request.form content type = ImmutableMultiDict; get returns String

        email = request.form.get('email')
        password = request.form.get('password')

        return mainDB.validateStudent(email, password)
        #return mainDB.studentDict[email].__str__()
    else:
        return render_template('sessionDetails.html')


if __name__ == "__main__":
    # s1 = Student("wow@gmail.com", "1234", "wilson", "diaz", "temple", "sophomore", "ist")
    # print(s1)
    app.run(debug=True)
