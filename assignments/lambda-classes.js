// CODE here for your Lambda Classes

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

//Person Objects
const taylor = new Person ({
    name: 'Taylor',
    age: 25,
    location: 'Australia',
    gender: 'Female'
});

const alexis = new Person({
    name: 'Alexis',
    age: 30,
    location: 'California',
    gender: 'Female'
});

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
        console.log(`${student} receives a perfect score on ${subject}.`);
    };
    CheckGrade(student) {
        const num = Math.floor((Math.random() * 10) + 5);
        student.grade = student.grade + num;
    }
};

//Instructor Objects
const shavel = new Instructors ({
    name: 'Shavel',
    age: 32,
    location: 'Florida',
    gender: 'Female',
    speacialty: 'Ruby',
    favLanguage: 'Ruby',
    catchPhrase: 'never stop learning'
});

const ann = new Instructors({
    name: 'Ann',
    age: 42,
    location: 'Jamaica',
    gender: 'Non-Binary',
    speacialty: 'JavaScript!',
    favLanguage: 'Python',
    catchPhrase: 'it\'s just JavaScript...'
});

class Student extends Person {
    constructor(studAttrs) {
        super(studAttrs);
        this.previousBackground = studAttrs.previousBackground;
        this.className = studAttrs.className;
        this.favSubjects = studAttrs.favSubjects;
        this.grade = studAttrs.grade;
    }
    listsSubjects() {
        console.log(`${this.favSubjects}`);
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}.`);
    };
    graduate() {
        if (this.grade >= 70) {
            console.log(`CONGRATS ${this.name}! You made it to graduation!!`);
        } else {
            console.log(`Keep working on your sprint challenges ${this.name}`);
        }
    }
};

//Student Objects
const kira = new Student ({
    name: 'Kira',
    age: 19,
    location: 'Orlando, FL',
    gender: 'female',
    previousBackground: 'Social Work',
    className: 'Web16',
    favSubjects: ['HTML', 'CSS', 'Phython',],
    grade: 85
});

const olivea = new Student ({
    name: 'Olivea',
    age: 20,
    location: 'Tampa, FL',
    gender: 'non-binary',
    previousBackground: 'Customer Service',
    className: 'Web16',
    favSubjects: ['C++', 'PHP', 'Swift',],
    grade: 75
});

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
        console.log(`${this.name} debugs ${student}'s code on ${subject}`);
    };
};

//PM Objects
const mon = new ProjectManagers ({
    name: 'Monique',
    age: 25,
    location: 'California',
    gender: 'unknown',
    speacialty: 'Front-End Dev',
    favLanguage: 'Go',
    catchPhrase: 'wi jammin!'
});

const flo = new ProjectManagers ({
    name: 'Florence',
    age: 45,
    location: 'Guyana',
    gender: 'Female',
    specialty: 'Full-stack Dev',
    favLanguage: 'Java',
    catchPhrase: 'you got this!'
});


console.log(taylor);
console.log(alexis);
console.log(taylor.speak());
console.log(alexis.speak());

console.log(shavel);
console.log(shavel.speak());
console.log(shavel.demo('javascript'));
console.log(shavel.grade('Kira', 'Python'));
console.log(ann);
console.log(ann.speak());
console.log(ann.catchPhrase);
console.log(ann.grade('Olivea', 'JavaScript'));

console.log(kira);
console.log(kira.listsSubjects());
console.log(kira.PRAssignment('Python'));
console.log(olivea);
console.log(olivea.listsSubjects());
console.log(olivea.sprintChallenge('JavaScript'));
console.log(`${olivea.name}'s previous background was in ${olivea.previousBackground}.`);

console.log(`${mon.name} is enjoying ${mon.location}`);
console.log(`${flo.name} loves doing her specialty ${flo.specialty}.`);
console.log(mon.standUp('Web16'));
console.log(flo.standUp('Web16'));
console.log(mon.debugsCode('Kira', 'Python'));
console.log(flo.debugsCode('Olivea', 'JavaScript'));

//stretch
console.log(kira.grade);
shavel.CheckGrade(kira);
console.log(kira.grade);
console.log(olivea.graduate());
console.log(kira.graduate());
