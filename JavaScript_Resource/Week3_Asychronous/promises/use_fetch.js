// Use fetch to get data from a URL. It is promise-based by default.

const url = prompt("Enter a URL");
fetch(url)
    .then((response) => {
        return response.json()
    }).then((result) => {
        console.log("Success!", result);
    }).catch(status => {
        console.log(`An error with status code ${status} occurred: `); // Runs on error
    });
