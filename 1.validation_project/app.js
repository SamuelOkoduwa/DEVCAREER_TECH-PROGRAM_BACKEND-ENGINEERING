// Objects to store 
const database = {
	"Remi": {
		firstName: 'Samuel',
		lastName: 'Sail',
		email: 'new@email.com',
		accountActivated: true,
		password: 'password'
	},
	"Dream": {
		firstName: 'Reddis',
		lastName: 'Sailus',
		email: 'new@email.com',
		accountActivated: true,
		password: 'password'
	},
	"Remilis": {
		firstName: 'Gitbucket',
		lastName: 'Newlance',
		email: 'new@email.com',
		accountActivated: true,
		password: 'password'
	}
} 

function displayUserDetails() {
	// For the username
	let userName = prompt('Please enter your username: ');
	while(userNameValid(userName) == false){
	userName = prompt('Please enter valid username: ');
	// userName ++;
	}
	if (userName == null) {
		return
	}

	// For the password
	let password = prompt('Please enter your password: ');
	while(passwordValid(password) == false) {
	password = prompt('Your Password must be greater than six charaters: ');
	}
	if (password == null) {
		return
	}

	// Comfirm Password
	let comfirmPassword = prompt('Please Comfirm your password: ')
	while (comfirmPassword !== password) {
		comfirmPassword = prompt('Please enter your corret password: ')
	}
	if (comfirmPassword == null) {
		return
	}

	// confirm the data from the data base
	const user = database[userName];
	if (user == undefined) {
		alert('Kindly register on the portal');
	};
	alert(`Kindly find out the following details:\nFirstname: ${user.firstName},\nLastname: ${user.lastName},\nEmail: ${user.email},\nAcount Activation: ${user.accountActivated}`)
	console.log(user)

	// console.log(userName, password, comfirmPassword);
}
displayUserDetails()

function userNameValid(userName) {
	if (userName == null){
		return true
	}
	if (userName.length > 10) {
		return false; 
	} 
	else {
		return true;
	}
}

function passwordValid(password) {
	if (password == null) {
		return true
	}
	if (password.length < 6) {
		return false 
	}
	else {
		return true
	}
}