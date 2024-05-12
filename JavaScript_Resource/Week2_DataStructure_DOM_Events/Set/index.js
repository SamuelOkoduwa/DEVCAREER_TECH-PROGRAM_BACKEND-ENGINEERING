let setOfUsers = new Set()

let mary = {name : "Mary", age: 20}
let John = {name : "John", age: 23}

setOfUsers.add(mary)
setOfUsers.add(John)
setOfUsers.add(mary) //Won't get added again

console.log(setOfUsers)

// Get the size of the set
console.log(setOfUsers.size) // 2

// Check if a value is in the set
console.log(setOfUsers.has(mary)) // true

// Remove a value from the set
setOfUsers.delete(mary)
console.log(setOfUsers.has(mary)) // false

// Iterate over the set
for (let user of setOfUsers) {
    console.log(user) 
}

// Convert the set to an array
let usersArray = Array.from(setOfUsers)
console.log(usersArray) // [{name: "John", age: 23}, {name: "Mary", age: 20}]
