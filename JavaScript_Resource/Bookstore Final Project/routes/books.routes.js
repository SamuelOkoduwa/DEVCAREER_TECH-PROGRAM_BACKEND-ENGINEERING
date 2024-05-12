const express = require('express')
const { AddBookValidationMW, UpdateBookValidationMW } = require("../validators/book.validator")
const boookController = require("../controllers/book.controller")

const bookRouter = express.Router()

bookRouter.get('/', boookController.getAllBooks)

bookRouter.get('/:id', boookController.getBookByID)

bookRouter.post('/', AddBookValidationMW, boookController.addBook)

bookRouter.put('/:id', UpdateBookValidationMW, boookController.updateBook)

bookRouter.delete('/:id', boookController.deleteBookByID)

module.exports = bookRouter


