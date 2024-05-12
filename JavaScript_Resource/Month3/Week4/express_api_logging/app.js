const express = require('express');
const db = require('./db');
const rateLimit = require("express-rate-limit");
const logger = require('./logger/logger');
const httpLogger = require('./logger/httpLogger')

const booksRoute = require('./routes/books');


const PORT = 3000;
const app = express();

// Connect to MongoDB
// db.connectToMongoDB();


app.use(httpLogger)

// Defaults to in-memory store. 
// You can use redis or any other store.
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

// Apply the rate limiting middleware to all requests
app.use(limiter)

// Apply the rate limiting middleware to API calls only
// app.use('/api', apiLimiter)

app.use(express.static('public'));
app.use(express.json());


app.use('/books', booksRoute);


app.get('/', (req, res) => {
	logger.info('The home page was requested');
    res.end('Home Page');
});

// throw  error to simulate a server error
app.get('/error', (req, res) => {
	throw new Error('An error occurred');
});


//error handler
app.use((err, req, res, next) => {
	logger.error(err.message);
	res.status(500).send('Something failed');
});



app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`)
})
