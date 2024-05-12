alert("Welcome!")
getUserDetails()
alert("Ok, Goodbye")


/**
 * A function to display a user details
 */
function getUserDetails() {

    let username = prompt("Enter your username")

    while (!validateUsername(username)) {
        if (username === null) return
        username = prompt("Enter your username. Username must be less than 10")
    }


    let password = prompt("Enter your password")

    while (!validatePassword(password)) {
        if (password === null) return
        password = prompt("Enter your password.")
    }

    let passwordAgain = prompt(`Enter your password again`)

    while (password !== passwordAgain) {
        if (passwordAgain === null) return
        passwordAgain = prompt("Password do not match! Confirm your password again.")
    }

    const userDetails = userStore[username]

    if (!userDetails) {
        alert(`User ${username} does not exist. Please register`)
        return
    }

    if (userDetails.password !== password) {
        alert(`Password is incorrect. Please try again`)
        return
    }

    alert(`Showing details for ${username}: \n
    First Name: ${userDetails.firstName} \n
    Last Name: ${userDetails.lastName} \n
    Email: ${userDetails.email} \n
    profession: ${userDetails.profession}
    `)
}

/**
 * A function to validate the username
 * @param {string} username 
 * @returns boolean
 */
function validateUsername(username) {
    if (!username) return false
    if (username.length > 10) return false
    return true
}

/**
 * A function to validate the password
 * @param {string} password 
 * @returns boolean
 */
function validatePassword(password) {
    if (!password) return false
    if (password.length < 6) return false
    if (password.length > 15) return false
    return true

}

/**
 * A user store object
 * @type {object}
 * */
const userStore = {
    "Ada": {
        firstName: "Ada",
        lastName: "Lovelace",
        email: "adalovelace@mail.com",
        profession: "Computer programmer",
        password: "12345Ada"
    },
    "Yemi": {
        firstName: "Yemi",
        lastName: "Adebisi",
        email: "yemi_adebisi@gmail.com",
        profession: "Software Engineer",
        password: "12345Yemi"
    },
}


