// CODE here for your Lambda Classes

//Parent
class Person {
    constructor(attrs) {
        this.name = attrs.name;
        this.age = attrs.age;
        this.location = attrs.location;
        this.gender = attrs.gender;
    }
    speak() {
        return `Hello, my name is ${this.name}, I am from ${this.location}. `;
    };
};

//extend from Person
class Instructors extends Person {
    constructor(instructAttrs) {
        super(instructAttrs);
        this.specialty = instructAttrs.specialty;
        this.favLanguage = instructAttrs.favLanguage;
        this.catchPhrase = instructAttrs.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}.`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score of ${subject}.`);
    };
};

//Extending from Person
class Student extends Person {
    constructor(studAttrs) {
        super(studAttrs);
        this.previousBackground = studAttrs.previousBackground;
        this.className = studAttrs.className;
        this.favSubjects = studAttrs.favSubjects;
    }
    listsSubject(subject) {
        console.log(favSubjects);
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on {subject}.`);
    };
};

//Extending from Instructor
class ProjectManagers extends Instructors {
    constructor(pMAttrs) {
        super(pMAttrs);
        this.gradClassName = pMAttrs.gradClassName;
        this.favInstructor = pMAttrs.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    };
};


