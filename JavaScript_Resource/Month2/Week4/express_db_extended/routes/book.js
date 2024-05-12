const express = require('express');
const bookController = require('../controllers/bookController');

const bookRouter = express.Router();

bookRouter.get('/', bookController.getBooks);
bookRouter.get('/:id', bookController.getBookById);
bookRouter.post('/', bookController.addBook);
bookRouter.put('/:id', bookController.updateBook);
bookRouter.delete('/:id', bookController.deleteBook);

//add author to book
bookRouter.put('/:id/author/:authorId', bookController.addAuthorToBook);
// get all authors for a book
bookRouter.get('/:id/authors', bookController.getBookAuthors);

module.exports = bookRouter;