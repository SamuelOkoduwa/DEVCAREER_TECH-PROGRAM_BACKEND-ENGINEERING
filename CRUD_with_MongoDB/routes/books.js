const express = require('express');
const bookRoute = express.Router();

const bookModel = require('../models/models')
// CRUD Routes

// READ 
bookRoute.get('/', (req, res)=> {
	bookModel.find({})
	.then((books)=>{
		res.status(200).send(books)		// Get all the books
	}).catch((err)=>{
		console.log(err);
		res.status(500).send(err.message)
	})
})

// READ BOOKS BY ID
bookRoute.get('/:id', (req, res)=>{
	const id = req.params.id
	bookModel.findById(id)
	.then((books)=>{
		res.status(200).send(books)
	}).catch((err)=>{
		res.status(400).send(err)
	})
})

// CREATE
bookRoute.post('/', (req, res)=> {
	const book = req.body
	console.log(book);

	bookModel.create(book)
	.then((book)=>{
		res.status(201).send({
			message: 'Book added successfully',
			data: book 
		}).catch((err)=>{
			res.status(400).send(err.message)
		})
	})

	//Add books to the database
	// res.send('Books Added')
})

// UPDATE
bookRoute.put('/:id', (req, res)=>{
	const id = req.params.id
	const book = req.body

	bookModel.findByIdAndUpdate(id, book, {new: true})
	.then((book)=>{
		res.status(200).send(book)
	}).catch((err)=>{
		res.status(400).send(err)
	})
})

// DELETE
bookRoute.delete('/:id', (req, res)=>{
	const id = req.params.id
	bookModel.findByIdAndDelete(id)
	.then((book)=>{
		res.status(200).send(book)
	}).catch((err)=>{
		res.status(400).send(err)
	})
})

module.exports = bookRoute