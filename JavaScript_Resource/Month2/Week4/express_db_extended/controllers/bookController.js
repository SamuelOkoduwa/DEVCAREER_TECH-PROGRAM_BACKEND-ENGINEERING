const db = require('../models');

// Get Models
const Book = db.books
const BookAuthor = db.bookAuthors

// Add CRUD controller functions
async function getBooks(req, res, next) {
    try {
        const books = await Book.findAll()
        res.json(books)
    } catch (err) {
        next(err)
    }
}

async function getBookById(req, res, next) {
    try {
        const book = await Book.findByPk(req.params.id)
        res.json(book)
    } catch (err) {
        next(err)
    }
}

async function addBook(req, res, next) {
    let bookInfo = req.body;
    try {
        const book = await Book.create(bookInfo);
        res.status(201).json(book);
    } catch (error) {
        next(error);
    }

}

async function updateBook(req, res, next) {
    try {
        const book = await Book.findByPk(req.params.id);
        if (book) {
            await book.update(req.body);
            res.json(book);
        } else {
            res.status(404).json({
                message: 'Book not found'
            });
        }
    } catch (error) {
        next(error);
    }
}

async function deleteBook(req, res, next) {
    try {
        const book = await Book.findByPk(req.params.id);
        if (book) {
            await book.destroy();
            res.json(book);
        } else {
            res.status(404).json({
                message: 'Book not found'
            });
        }
    } catch (error) {
        next(error);
    }
}

async function getBookAuthors(req, res, next) {
    const BookId = req.params.id
    try {
        const bookAuthors = await BookAuthor.findAll(
            {
                where: {
                    BookId
                },
                include: [{
                    model: db.books
                }]
            }
        )
        res.json(bookAuthors)
    } catch (err) {
        next(err)
    }
}

async function addAuthorToBook(req, res, next) {
    const BookId = req.params.id
    const AuthorId = req.params.authorId

    try {
        const bookAuthor = await BookAuthor.create({
            BookId,
            AuthorId
        })
        res.status(201).json(bookAuthor)
    } catch (error) {
        next(error);
    }

}

module.exports = {
    addBook,
    getBooks,
    getBookById,
    updateBook,
    deleteBook,
    getBookAuthors,
    addAuthorToBook
}