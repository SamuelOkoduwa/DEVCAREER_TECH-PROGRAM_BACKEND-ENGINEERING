// Set style of an element
// Access and set all styles of an element, by calling .style property
const elemToStyle = document.querySelector("h1")
elemToStyle.style.color = "red"
elemToStyle.style.fontSize = "30px"
elemToStyle.style.backgroundColor = "yellow"


// Set Class of an element
// Access and set all classes of an element, by calling .classList property
const elemToClass = document.querySelector("h1")
elemToClass.classList.add("my_class") // Add a class to an element
// elemToClass.classList.remove("my_class") // Remove a class from an element


// Set style to normal CSS properties
const elemToStyle2 = document.querySelector("h1")
elemToStyle2.style = ""