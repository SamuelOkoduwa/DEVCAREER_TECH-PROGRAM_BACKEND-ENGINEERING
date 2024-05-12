//Numbers
let size_in_meters = 20
let size_in_inches = 2.1024
let maxSize = Infinity
let minSize = -Infinity
let not_a_number = NaN

let sum = 20 + 23.1; let difference = 20 - 10;
let multiplication_result = 20 * 10; let division_result = 20 / 2;



//BigInt
let very_big_number = 872765678901234567890123567890134567890n;
let another_big_number = BigInt(872765678901234567890123567890134567890)


//Strings
let name = "Ayodeji Falz"
let name2 = 'Ayodeji Remi'
let name3 = `Ayodeji Azeez`

let firstName = 'Ayodeji'
let lastName = 'Azeez'
let fullName = `Mr ${firstName}${lastName}`

let message = "Hello my friends\n My name is Johnson\n I am a software engineer"
console.log(message.toUpperCase())
// 'HELLO MY FRIENDS\n MY NAME IS JOHNSON\n I AM A SOFTWARE ENGINEER'
console.log(message.startsWith("Hello"))
// true
console.log(message.indexOf("name"))
// 21
console.log("\u{1F60D}")


//Boolean
let isBigSize = true //Yes, the size is big
let sizeIsSmall = false //No, the size is not small

//Null type
let size = null
let num = null

//undefined type
let weight; //The variable size is undefined by default
let age = undefined //This can be done explicitly as well (Not recommended)


//Objects
let user1 = {}
let user2 = new Object()
user1["name"] = "Azeez"

let user3 = {
    name: "John Doe",
    age: 20,
    weight: 20.3,
    "verifiedUser": true
}

let user = {
    name: "John Doe",
    age: 20,
    weight: 20.3,
    "verifiedUser": true
}
console.log(user["name"])
console.log(user.age)
delete user.weight
