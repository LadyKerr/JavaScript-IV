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

//Child
class Instructor extends Person {
    constructor(instructAttrs) {
        super(instructAttrs);
        this.specialty = instructAttrs.specialty;
        this.favLanguage = instructAttrs.favLanguage;
        this.catchPhrase = instructAttrs.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}.`);
    }
    grade(studentObj, subject) {
        console.log(`${student.name} receives a perfect score of ${subject}.`);
    };
};