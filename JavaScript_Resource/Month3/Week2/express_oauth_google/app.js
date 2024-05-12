const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const connectEnsureLogin = require('connect-ensure-login');
const cookieSession = require('cookie-session');
require('dotenv').config();

const db = require('./db');

const PORT = 3000;
const app = express();

// Connect to MongoDB
db.connectToMongoDB();

require('./auth/google') // Google OAuth strategy Middleware

app.use(cookieSession({
    name: 'google-auth-session',
    keys: ['key1', 'key2']
}))

const booksRoute = require('./routes/books');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(passport.initialize());
app.use(passport.session());


//secure the /books route
app.use('/books', connectEnsureLogin.ensureLoggedIn(), booksRoute);

// renders the home page
app.get('/', (req, res) => {
    res.send("Welcome to the book API");
});

app.get("/success", (req, res) => {
    console.log(req.user);
    res.send(`Welcome ${req.user.email}`);
})

app.get("/failed", (req, res) => {
    res.send("Failed to authenticate");
})

app.get('/login',
    passport.authenticate('google', {
        scope:
            ['email', 'profile']
    }
    ));

app.get('/google-auth/callback',
    passport.authenticate('google', {
        failureRedirect: '/failed',
    }),
    function (req, res) {
        res.redirect('/success')

    }
);

app.get("/logout", (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/');
})


//catch errors middleware
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send('Something broke!');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

