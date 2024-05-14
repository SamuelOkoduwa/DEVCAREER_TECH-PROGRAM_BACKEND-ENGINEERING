
const express = require('express');
const mongoose = require('mongoose')
const bookRoute = require('./routes/books')

require('dotenv').config()
const { mongoConnect } = require('./db')

const app = express()

// Connecting instance
mongoConnect()

// Middleware to parse JSON request bodies
app.use(express.json());

// Book Route from books.js
app.use('/books', bookRoute)

app.get('/', (req, res)=>{
	res.send('Welcome to home page')
})


// Setting up server
PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
	console.log(`The server is listening on http://localhost:${PORT}`)
})