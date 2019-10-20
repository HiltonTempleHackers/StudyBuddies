from flask import Flask, render_template, url_for, request, redirect
from classes import session as sesh
from classes import student as stud
from classes import database as db


app = Flask(__name__)

mainDB = db
session = sesh


#

@app.route('/', methods=['POST', 'GET'])
def index():
    if request.method == 'POST':
        #pass
        #task_content = request.form.get('content') #request.form content type = ImmutableMultiDict; get returns String

        email = request.form.get('email')
        password = request.form.get('password')
        firstName = request.form.get('firstName')
        lastName = request.form.get('lastName')
        school = request.form.get('school')
        year = request.form.get('year')
        major = request.form.get('major')


        s1 = stud(email, password, firstName, lastName, school, year, major)

        #new_task = task_content.popitem()
        return s1.__str__()

    else:
        return render_template('index.html')

if __name__ == "__main__":
    #s1 = Student("wow@gmail.com", "1234", "wilson", "diaz", "temple", "sophomore", "ist")
    #print(s1)
    app.run(debug=True)