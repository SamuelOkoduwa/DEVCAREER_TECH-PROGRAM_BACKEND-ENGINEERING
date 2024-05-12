// Create an array
// let users = new Array(); // Using class method

// let items = ["John", "Mary", "Yemi", 20, 25.6, { theme: "dark" }];

// console.log(items)
// console.log(items.length)


// Create an array of strings called animals.
// let animals = ["Lion", "Tiger", "Pig"]
// // index ==>  [ 0,         1       2  ]


// // // Get values from the array
// alert(animals[0]) //Lions
// alert(animals[1]) //Tiger



// // Update a value in the array
// animals[2] = { name: "Goat", type: "herbivores" } // ["Lions", "Tiger", "Goat"]
// console.log(animals)


// // Get the length of the array
// console.log(animals.lenght) // 3 



// // Array Methods

// // Add a value to the end of the array
// animals.push("Cow")
// console.log(animals) // ["Lions", "Tiger", "Goat", "Cow"]

// // Remove a value from the end of the array
// animals.pop()
// console.log(animals) // ["Lions", "Tiger"]



// // Remove a value from the beginning of the array
// animals.shift()
// console.log(animals) // ["Tiger",  "Pig"]

// // Add a value to the beginning of the array
// animals.unshift("Cheetah")
// console.log(animals) // ["Cheetah", "Lions", "Tiger", "Pig"]


// // Get the index of a value
// console.log(animals.indexOf("Elephant")) // 1


// // Get a slice of the array
// let animals = ["Lions", "Tiger", "Pig", "Cheetah", "Jaguar"]

// console.log(animals.slice(2)) 


// // Get a copy of the array
// let copyOfanimals = animals.slice()


// // Reverse the array
// animals.reverse()
// console.log(animals) 

// // Sort the array
// animals.sort()
// console.log(animals) //  ['Lion', 'Pig', 'Tiger']




let animals = ["Lion", "Tiger", "Pig"]

// // iterate over the array with for...of
// for (let animal of animals) {
//     console.log(`This animal is: ${animal}`)
// }



// // iterate over the array with for...in
// for (let index in animals) {
//     console.log(`The index is ${index} and the value is ${animals[index]}`)
// }


// // iterate over the array with forEach
// function displayEachAnimal(animal) {
//     console.log(`This animal is: ${animal}`)
// }

// animals.forEach(displayEachAnimal)


// animals.forEach((animal) => {
//     console.log(`This animal is: ${animal}`)
// })

// // iterate over the array with map
// let usernames = ["john", "azeez", "ade", "akintude"]
// let usernameInUppercase = usernames.map((username) => {
//     //do the transformation
//     const transformedUsername = username.toUpperCase()
//     return transformedUsername

// })

// console.log(usernameInUppercase)


// // iterate over the array with filter
// let populations = [200, 100, 30, 4, 5, 60]

// console.log(`Default population: ${populations}`)

// let populationGreaterThan30 = populations.filter((population) => {
//     if (population > 30 && population < 200){
//         return population
//     }
// })

// console.log(populationGreaterThan30)




// // 2D Arrays
// let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// console.log(matrix[2][1])

