// // A promise call cleanly handle multiple asynchronous operations.
// function getData(url) {
//     return new Promise((resolve, reject) => {
//         if (!url) {
//             reject("No URL provided");
//         }

//         const xhr = new XMLHttpRequest();
//         xhr.open("GET", url);
//         xhr.send();
//         xhr.onload = function () {
//             if (xhr.status === 200) {
//                 resolve(xhr.responseText);
//             } else {
//                 reject(xhr.status);
//             }

//         };
//     });
// }

// async function getAllData() {
//     const result = await getData(url);
//     console.log("Success 1", result);

//     const result2 = await getData("https://reqres.in/api/unknown/2");
//     console.log("Success 2", result2);

//     const result3 = await getData("https://reqres.in/api/users/2");
//     console.log("Success 3", result3);
    
//     const result4 = await getData("https://reqres.in/api/unknown");
//     console.log("Success 4", result4);
// }


// const url = prompt("Enter a URL");
// getAllData(url)






