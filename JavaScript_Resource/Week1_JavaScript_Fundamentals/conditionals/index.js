//if statement
let day = "Monday"
if (day == "Monday") alert("Today is Monday")

let size = 25

if (size == 20) {
    alert("Your size is 20")
    alert("Thank you!")
}


//if-else statement
if (size == 20) {
    alert("Size is available")
    alert("Thank you!")
} else {
    alert("The size is not available")
}


//multiple if-else
if (day == "Monday") {
    alert("Today is monday!")
} else if (day == "Tuesday") {
    alert("Today is Tuesday!")
} else if (day == "Wednesday") {
    alert("Today is Wednesday!")
} else {
    alert("Today is neither Monday, Tuesday or Wednesday!")
}


//conditional operator (?)
let age = 29
let canVote = (age > 18) ? true : false
console.log(canVote)

//switch statement
let x = "value1"
switch (x) {
    case 'value1':
        console.log("Value1")
        break;
    case 'value2':
        console.log("Value1")
        break;
    default:
        console.log("No value")
        break;
}

