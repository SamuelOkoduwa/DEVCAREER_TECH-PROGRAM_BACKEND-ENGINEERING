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

// Promise.all() is a method that takes an array of promises and returns a new promise.
// It runs in parallel and returns an array of the results.
const promises = [
    getData("https://reqres.in/api/unknown/2"),
    getData("https://reqres.in/api/users/2"),
    getData("https://reqres.in/api/unknown")
];

// Promise.all(promises)
//     .then((results) => {
//         console.log("Success!", results);
//     }).catch(status => {
//         console.log(`An error with status code ${status} occurred: `);
//     });

// Promise.race() waits only for the first settled promise and gets its result (or error).
// Promise.race(promises)
//     .then((result) => {
//         console.log("Success!", result);
//     }).catch(status => {
//         console.log(`An error with status code ${status} occurred: `);
//     });

// Promise.any() waits for any of the first successful/fulfilled promise
// Promise.any(promises)
//     .then((result) => {
//         console.log("First Success!", result);
//     }).catch(status => {
//         console.log(`An error with status code ${status} occurred: `);
//     });





