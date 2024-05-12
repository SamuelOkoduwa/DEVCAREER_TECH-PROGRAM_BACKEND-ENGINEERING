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

// Create some users
const user1 = new User("Chike", "Obinna", "chikeobinna@mail.com", "mysimplepassword");
const user2 = new User("Johnson", "Olamide", "jola@gmail.com", "somepassword12");
const user3 = new User("David", "Adeleke", "davidadeleke@gmail.com", "thismypass");

// Create an anonymous user
const user4 = new User();


// Use the users
console.log(user1.getFullName());
console.log(user2.getFullName());
console.log(user3.getFullName());
console.log(user4.getFullName());


// Set some properties
user1.setPassword("newPassword");
user2.setEmail("mynewemail@mail.com");

console.log(user1.getPassword());
console.log(user2.getEmail());
