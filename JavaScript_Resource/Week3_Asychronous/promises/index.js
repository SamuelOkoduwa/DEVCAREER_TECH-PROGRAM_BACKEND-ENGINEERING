// A promise is a cleaner way to handle asynchronous operations.

function getData(url) {
    return new Promise((resolve, reject) => {
        if (!url) {
            reject("No URL provided");
        }

        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.send();
        xhr.onload = function () {
            if (xhr.status === 200) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.status);
            }            

        };
    });
}

const url = prompt("Enter a URL");

getData(url)
    .then((result) => {
        console.log("Success!"); // Runs on success
        console.log(result);
    }).catch(status => {
        console.log(`An error with status code ${status} occurred: `); // Runs on error
    });
