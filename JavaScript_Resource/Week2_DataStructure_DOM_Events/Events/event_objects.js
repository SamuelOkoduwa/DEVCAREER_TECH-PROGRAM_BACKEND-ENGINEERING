const p1Element = document.querySelector("p");


//get the event object
p1Element.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.target.id);
    console.log("Coordinates: " + e.clientX + ":" + e.clientY);
})


