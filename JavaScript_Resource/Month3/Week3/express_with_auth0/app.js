const express = require('express');
const { requiresAuth } = require('express-openid-connect');
const bodyParser = require('body-parser');
require('dotenv').config();

const auth0Middleware = require('./auth/auth0');

const PORT = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.set('views', 'views');
app.set('view engine', 'ejs');

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth0Middleware);


// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
    res.render('index', {
        user: req.oidc.user,
    });
});

//Get profile
// Add the requiresAuth middleware for routes that require authentication
app.get('/profile', requiresAuth(), (req, res) => {
    console.log(req.oidc.user);
    res.render('profile', {
        user: req.oidc.user,
    });

});

// Logout route
app.post('/logout', (req, res) => {
    req.oidcLogout();
    res.redirect('/');
});

//catch errors middleware
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send('Something broke!');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
