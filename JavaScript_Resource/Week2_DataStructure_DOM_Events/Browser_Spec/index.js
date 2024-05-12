// Defining a global function automatically adds it
// to the window global object:

function sayHello() {
    alert("Hello");
}

window.sayHello(); //This works
sayHello() // This works as well


// We can access Browser specific functions as well (BOM)
alert(window.innerHeight); // inner window height
alert(window.innerWidth); // inner window width

