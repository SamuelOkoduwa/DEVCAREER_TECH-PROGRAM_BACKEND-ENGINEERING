// Capturing Mouse Events

// const button = document.querySelector('#submit-btn');

// Mouse Enter Event
// button.addEventListener('mouseenter', () => {
//     alert("You've entered the button!");
// });

// // Mouse Leave Event
// button.addEventListener('mouseleave', () => {
//     alert("You've left the button!");
// })

// // Mouse Over Event
// button.addEventListener('mouseover', () => {
//     alert("You over the button!");
// })

// Mouse move Event 
// document.body.addEventListener('mousemove', (e) => {
//     console.log("You moved the mouse to position: " + e.clientX + ":" + e.clientY);
// })

// Context Menu Event
// button.addEventListener('contextmenu', (e) => {
//     e.preventDefault(); // prevents the browser from opening the default context menu
//     console.log("You right clicked the button!");
// })


// // Capturing Keyboard Events

// // Key Down Event
// document.body.addEventListener('keydown', (e) => {
//     console.log("You pressed a key: " + e.key);
// })

// // Combining Key Events
// // On ALT + S, alert "You pressed the ALT + S key combo!"
// document.body.addEventListener('keydown', (e) => {
//     if (e.altKey && e.key === 'S') {
//         alert("You pressed the ALT + S key combo!");
//     }
// })


// // Extra fancy event feature
// // Prevent user from copying text in your webpage
// document.body.addEventListener('copy', (e) => {
//     e.preventDefault();
//     alert("You can't copy text!");
// })