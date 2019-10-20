from flask import Flask, render_template, url_for, request, redirect

app = Flask(__name__)

#
class Student:

    def __init__(self, email, password, firstName, lastName, school, year, major):
        self.__email = email
        self.__password = password
        self.__firstName = firstName
        self.__lastName = lastName
        self.__school = school
        self.__year = year
        self.__major = major

    @property
    def fullname(self):
        return "{} {}".format(self.__firstName, self.__lastName)

    @property
    def school(self):
        return self.__school

    def searchGroups1(self, subject):
        pass

    def searchGroups2(self, subject, maxSize):
        pass

    def searchGroups3(self, subject, date):
        pass

    def searchGroups4(self, subject, maxSize, date):
        pass

    def __str__(self):
        return "Email: "+self.__email+"\nPassword: "+self.__password+"\nFirst Name: "+self.__firstName+"\nLast Name: "+self.__lastName+"\nSchool: "+self.__school+"\nYear: "+self.__year+"\nMajor: "+self.__major+"\n"

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


        s1 = Student(email, password, firstName, lastName, school, year, major)

        #new_task = task_content.popitem()
        return s1.__str__()

    else:
        return render_template('index.html')

if __name__ == "__main__":
    #s1 = Student("wow@gmail.com", "1234", "wilson", "diaz", "temple", "sophomore", "ist")
    #print(s1)
    app.run(debug=True)