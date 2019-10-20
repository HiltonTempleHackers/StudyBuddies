from flask import Flask, render_template, url_for, request, redirect
from classes import session as sesh
from classes import student as st
from classes import database as db

app = Flask(__name__)

#

@app.route('/', methods=['POST', 'GET'])
def index():
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

        s1 = st.Student(email, password, firstName, lastName, school, year, major)
        mainDB = db.Database()
        mainDB.addStudent(s1)
        return mainDB.

    else:
        return render_template('signUp.html')


if __name__ == "__main__":
    # s1 = Student("wow@gmail.com", "1234", "wilson", "diaz", "temple", "sophomore", "ist")
    # print(s1)
    app.run(debug=True)
