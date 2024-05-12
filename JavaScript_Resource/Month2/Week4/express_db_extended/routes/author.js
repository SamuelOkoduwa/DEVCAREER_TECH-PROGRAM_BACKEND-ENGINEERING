const express = require('express');
const authorController = require('../controllers/authorController');

const authorRouter = express.Router();

authorRouter.get('/', authorController.getAuthors);
authorRouter.get('/:id', authorController.getAuthorById);
authorRouter.post('/', authorController.addAuthor);
authorRouter.put('/:id', authorController.updateAuthor);
authorRouter.delete('/:id', authorController.deleteAuthor);

module.exports = authorRouter;