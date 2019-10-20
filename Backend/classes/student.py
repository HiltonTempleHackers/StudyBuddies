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

def main():
    s1 = Student("wow@gmail.com", "1234", "wilson", "diaz", "temple", "sophomore", "ist")
    print(s1.fullname)
    print(s1.school)

if __name__ == "__main__":
     main()