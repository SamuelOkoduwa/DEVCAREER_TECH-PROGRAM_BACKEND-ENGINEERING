// Location Object (https://developer.mozilla.org/en-US/docs/Web/API/Window/location)

//Change location of web page
alert(location.href); // shows current URL

if (confirm("Open Google?")) {
    location.href = "https://google.com"; // redirect the browser to another URL using the location object
}

// Reload the page
if (confirm("Reload the page?")) {
    location.reload();
}

// Change the URL
if (confirm("Change the URL?")) {
    location.href = "https://www.google.com";
}

// Change the URL and add a parameter
if (confirm("Change the URL and add a parameter?")) {
    location.href = "https://www.google.com?q=javascript";
}


// // Window Navigator (https://developer.mozilla.org/en-US/docs/Web/API/Window/navigator)

// // Get the browser name
alert("You're browsing from: " + navigator.userAgent);

// // Get the browser version
alert("You're using an engine created by : " + navigator.vendor);

// Get the browser language
alert("You're using a language: " + navigator.language);

// Get user location
navigator.geolocation.getCurrentPosition((position) => {
    alert("You're at: " + position.coords.latitude + ", " + position.coords.longitude);
});
