import datetime

class Session:

    def __init__(self, title, subject, school, maxSize, date):
        self.__title = title #string - generated by user
        self.__subject = subject #int - from drop down of presets
        self.__school = school #string - also from dropdown?
        self.__maxSize = maxSize #int - input by user (maybe -1 if no max?)
        self.__date = date #date - date of event chosen by user

        self.__studentList = [] #list of user objects belonging to this session

    @property  
    def subject(self):
        return self.__subject
    
    @property
    def maxSize(self):
        return self.__maxSize
    
    @maxSize.setter
    def maxSize(self, value):
        self.__maxSize = value

    @property
    def school(self):
        return self.__school
    
    @property
    def title(self):
        return self.__title

    @title.setter
    def title(self, value):
        self.__title = value

    @property
    def date(self):
        return self.__date
    
    @date.setter
    def date(self, value):
        self.__date = value

    @property
    def studentList(self):
        return self.__studentList

    @property
    def currentSize(self):
        return len(self.__studentList)
    
    def addStudent(self, student):
        self.__studentList.append(student)

    def deleteStudent(self, student):
        self.__studentList.remove(student)

    #returns bool
    def matchSessionToPreferences(self, preferences):
        #everything matches
        daterange = datetime.timedelta(days = 3)
        if (preferences[0] <= self.__maxSize <= preferences[1]) and (self.__date - daterange <= preferences[2] <= self.__date + daterange):
            return True

    def __str__(self):
        print("" + self.__title + "; " + self.__subject + "; " + str(self.__maxSize) + "; " + self.__school + "; " + self.__date.__str__())

    def showStudents(self):
        for student in self.__studentList:
            student.__str__()

#end class stuff
def main():
    pass

if __name__ == "__main__":
    main()
