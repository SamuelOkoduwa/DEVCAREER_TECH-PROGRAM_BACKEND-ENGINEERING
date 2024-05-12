const express = require('express');
const db = require('./db');

const PORT = 3000;
const app = express();

// Connect to MongoDB
db.connectToMongoDB();

const booksRoute = require('./routes/books');
const authorRoute = require('./routes/authors');


app.use(express.static('public'));
app.use(express.json());

app.use('/books', booksRoute);
app.use('/authors', authorRoute);


app.get('/', (req, res) => {
    res.end('Home Page');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
