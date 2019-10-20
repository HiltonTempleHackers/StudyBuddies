class Student:

    def __init__(self, email, password, firstName, lastName, school, year, major):
        self.__email = email
        self.__password = password
        self.__firstName = firstName
        self.__lastName = lastName
        self.__school = school
        self.__year = year
        self.__major = major
        self.__loggedIn = False

    @property
    def fullname(self):
        return "{} {}".format(self.__firstName, self.__lastName)

    @property
    def school(self):
        return self.__school

    @property
    def year(self):
        return self.__year

    @property
    def major(self):
        return self.__major
        
    @property
    def email(self):
        return self.__email
        
    @property
    def password(self):
        return self.__password

    def toggleLogin(self):
        if self.__loggedIn:
            self.__loggedIn = False
        else:
            self.__loggedIn = True

    def __str__(self):
        return "E: " + self.__email + "PW: " + self.__password + "FN: " + self.__firstName + "LN: " + self.__lastName + "SC: " + self.__school + "YR: " + self.__year + "MJ: " + self.__major
    


#end class stuff
def main():
    s1 = Student("wow@gmail.com", "1234", "wilson", "diaz", "temple", "sophomore", "ist")
    print(s1.fullname)
    print(s1.school)

if __name__ == "__main__":
     main()