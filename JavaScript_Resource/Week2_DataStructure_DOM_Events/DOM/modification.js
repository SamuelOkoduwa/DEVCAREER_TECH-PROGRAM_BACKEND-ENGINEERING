// Creating a new element

// Create element node
const newElem = document.createElement("span") // Can't see it yet because we haven't inserted it to the DOM

// Add content and style to the new element
newElem.innerText = "This is a Span element"
newElem.style.color = "red"

// Insert the new element to the end of body element
document.body.append(newElem)

// Insert the new element to the beginning of body element
document.body.prepend(newElem)

// Insert the new element after the first table element
document.body.insertBefore(newElem, document.querySelector("table"))

// Insert element in specific position using insertAdjacentHTML
const secondTable = document.querySelectorAll("table")[1]
secondTable.insertAdjacentHTML("afterbegin", "<h1>Hello New Section</h1>")
// Other variants are "beforebegin", "afterbegin", "beforeend", "afterend"



// Removing an element
// select the element to remove
const elemToRemove = document.querySelector("h1")
elemToRemove.remove()

// Clone an element
const elemToClone = document.querySelector("h1")
const clonedElem = elemToClone.cloneNode(true)
document.body.append(clonedElem)
