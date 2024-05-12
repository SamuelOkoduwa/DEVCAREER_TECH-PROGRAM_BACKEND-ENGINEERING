const express = require('express')
const { AddAuthorValidationMW, UpdateAuthorValidationMW } = require("../validators/author.validator")
const authorController = require("../controllers/author.controller")

const authorRouter = express.Router()

authorRouter.get('/', authorController.getAllAuthors)

authorRouter.get('/:id', authorController.getAuthorByID)

authorRouter.post('/', AddAuthorValidationMW, authorController.addAuthor)

authorRouter.put('/:id', UpdateAuthorValidationMW, authorController.updateAuthor)

authorRouter.delete('/:id', authorController.deleteAuthorByID)

module.exports = authorRouter


