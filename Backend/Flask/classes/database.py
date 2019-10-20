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
    def studentDict(self):
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

    #Handell Added (Tentative Validation Method)
    def validateStudent(self, email, password):
        if email in self.__studentDict:
            if password == self.studentDict[email].password:
                #login successful
                self.studentDict[email].toggleLogin()
                return "Successful"
            else:
                return "Invalid Password"
        else:
            return "No email exists for this account"

    #preferences is a list: [subject, minSize, maxSize, date]
    #returns a list
    def findSessions(self, preferences):
        foundSessions = []

        if preferences[0] not in self.__subjectsToSessions:
            return foundSessions #empty list

        subjectSessions = self.__subjectsToSessions[preferences[0]] #list of sessions based on (preferred) subject

        #just return default list of all sessions for this subject
        if preferences[1] is None and preferences[2] is None and preferences[3] is None:
            return subjectSessions

        for session in subjectSessions:
            if session.matchSessionToPreferences(preferences[1:]): #check the other 3 inputs/we know subject
                foundSessions.append(session)
        return foundSessions

        
        

        