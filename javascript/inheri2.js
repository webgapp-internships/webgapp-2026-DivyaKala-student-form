
/*class Department {

    constructor(studentName) {
        this.studentName = studentName;
    }

    details() {
        return "Student Details";
    }
}


class CSE extends Department {

    details() {
        return `${this.studentName}: CSE Department`;
    }
}


// Another Child Class
class IT extends Department {

    details() {
        return `${this.studentName}: IT Department`;
    }
}


// Student inherits CSE
class Student extends CSE {

    constructor(studentName, project) {

        // Call Parent Constructor
        super(studentName);

        this.project = project;
    }

    showProject() {
        return `${this.studentName} is doing ${this.project} project`;
    }
}


// Objects
const s1 = new CSE("Raj");

const s2 = new IT("Divya");

const s3 = new Student("Santhosh", "Gym Management System");



console.log(s1.details());

console.log(s2.details());

console.log(s3.details());

console.log(s3.showProject());*/

class Department {
    constructor(studentName, mark) {
        this.studentName = studentName;
        this.mark = mark;
    }

    result() {
        return this.mark >= 35 ? "Pass" : "Fail";
    }
}

class CSE extends Department {
    details() {
        return `Name: ${this.studentName}, Mark: ${this.mark}, Result: ${this.result()}`;
    }
}

class IT extends Department {
    details() {
        return `Name: ${this.studentName}, Mark: ${this.mark}, Result: ${this.result()}`;
    }
}


const s1 = new CSE("Raj", 75);
const s2 = new IT("Divya", 60);
const s3 = new CSE("Santhosh", 25);
const s4 = new IT("Gayathri", 30);

const students = [s1, s2, s3, s4];

let passCount = 0;
let failCount = 0;

for (let student of students) {
    console.log(student.details());

    if (student.result() === "Pass") {
        passCount++;
    } else {
        failCount++;
    }
}

console.log("--------------------");
console.log("Passed Students:", passCount);
console.log("Failed Students:", failCount);