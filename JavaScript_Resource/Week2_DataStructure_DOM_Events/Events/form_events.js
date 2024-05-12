//focus on the first input field in the form
document.querySelector('#name').focus();

// On focus of input, alert "You're editing the name field!"
document.querySelectorAll('input').forEach((input) => {
    input.addEventListener('click', (e) => {
        alert(`You're editing the ${e.target.name} field!`);
    });
})

// On submit of form, alert "You submitted the form!"
document.querySelector('#form1').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("You submitted the form!");
})