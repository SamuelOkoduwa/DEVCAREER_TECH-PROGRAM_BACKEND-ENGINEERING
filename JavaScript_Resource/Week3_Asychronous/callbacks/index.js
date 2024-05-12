// A callback with success and error handlers
function getData(url, success, error) {
    if (!url) {
        return;
    }

    // load content of page from url
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    xhr.onload = function () {
        if (xhr.status === 200) {
            success(xhr.responseText); // Run success callback
        } else {
            error(xhr.status); // Run error callback
        }

    };
}

function success(result) {
    console.log("Success!");
    console.log(result);
}

function error(status) {
    console.log(`An error with status code ${status} occurred: `);
}

const url = prompt("Enter a URL");
getData(url, success, error);

