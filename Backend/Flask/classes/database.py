from classes import student
from classes import session

class Database:

    def __init__(self):
        self.__subjectsToSessions = {}
        self.__studentDict = {}
    
    @property
    def subjectsToSessions(self):
        return self.__subjectsToSessions
    
    @property
    def userDict(self):
        return self.__studentDict
    
    def addSession(self, session):
        if session.subject not in self.__subjectsToSessions:
            self.__subjectsToSessions[session.subject] = []

        self.__subjectsToSessions[session.subject].append(session)

    #make sure that student is not already in db before adding
    #check that email is unique at signup
    def addStudent(self, student):
        if student.email not in self.__studentDict:
            self.__studentDict[student.email] = student
        