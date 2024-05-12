// Class inheritance is a way for one class to extend another class.

class User {

    constructor(firstName, lastName, email, password) {
        this.firstName = firstName || "Anonymous";
        this.lastName = lastName || "Superhuman";
        this.email = email || ""
        this.password = password || "defaultPassword";
        this.emailActivated = false;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getEmail() {
        return this.email;
    }

    getPassword() {
        return this.password;
    }

    isEmailActivated() {
        return this.emailActivated;
    }

    setFullName(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    setEmail(email) {
        this.email = email;
    }

    setPassword(password) {
        this.password = password;
    }

    activateEmail() {
        this.emailActivated = true;
    }

}


class Student extends User {
    constructor(firstName, lastName, email, password, studentNumber, studentClass, subjects) {
        super(firstName, lastName, email, password); // Invoke the parent constructor with the same arguments
        
        // Add some more properties to customize the student class
        this.studentNumber = studentNumber || "N/A";
        this.studentClass = studentClass || "N/A";
        this.subjects = subjects || []; 
    }

    getStudentNumber() {
        return this.studentNumber;
    }

    getStudentClass() {
        return this.studentClass;
    }

    getSubjects() {
        return this.subjects;
    }

    setStudentClass(studentClass) {
        this.studentClass = studentClass;
    }

    setStudentNumber(studentNumber) {
        this.studentNumber = studentNumber;
    }

    addNewSubject(subject) {
        this.subjects.push(subject);
    }

}


// Create some students
const student1 = new Student("Obinna", "chikeobinna@mail.com", "mysimplepassword", 123, 1, ["English", "Mathematics"]);
const student2 = new Student("Johnson", "Olamide", "jola@gmail.com", "somepassword12", 456, 2, ["English", "Science"]);


// We can still use methods from User class
console.log(student1.getFullName());
console.log(student2.getFullName());
console.log(student1.getPassword());
console.log(student2.getEmail());

// Use new methods from Student class
console.log(student1.getStudentNumber());
console.log(student2.getStudentNumber());

console.log(student1.getStudentClass());
console.log(student2.getStudentClass());

// console.log(student1.getSubjects());
// console.log(student2.getSubjects());