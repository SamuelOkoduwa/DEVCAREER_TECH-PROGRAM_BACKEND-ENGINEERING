const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');

const booksRoute = require('./routes/books');
const authRoute = require('./routes/auth');

require('./db').connectToMongoDB() // Connect to MongoDB
require('dotenv').config()

require("./authentication/auth") // Signup and login authentication middleware

const PORT = 3000;
const app = express();



app.set('views', 'views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', authRoute);
app.use('/books', passport.authenticate('jwt', { session: false }), booksRoute);


// renders the home page
app.get('/', (req, res) => {
    res.send('Welcome to the book API');
});

// Handle errors.
app.use(function (err, req, res, next) {
    console.log(err);
    res.status(err.status || 500);
    res.json({ error: err.message });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
