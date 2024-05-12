let map = new Map()

// Add values to the map
map.set(1, "An integer key")
map.set(true, "A boolean key")

let mary = {name : "Mary", age: 20}
map.set(mary, "An object key")


// Display the keys
console.log(map.keys())

// Display the values
console.log(map.values())

// Display the entries
console.log(map.entries())

// Display the size
console.log(map.size)

// Check if a key exists
console.log(map.has(1))

// Remove a key
map.delete(1)

// Iterate over the map
for (let entry of map) {
    console.log(entry)
}

// Convert the map to an array
let mapArray = Array.from(map)
console.log(mapArray)

// Convert the map to an object
let mapObject = Object.fromEntries(map)
console.log(mapObject)

