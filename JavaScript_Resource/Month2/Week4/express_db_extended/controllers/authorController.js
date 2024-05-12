const db = require('../models');

const Author = db.authors

async function getAuthors(req, res, next) {
    try {
        const authors = await Author.findAll()
        res.json(authors)
    } catch (err) {
        next(err)
    }
}

async function getAuthorById(req, res, next) {
    try {
        const author = await Author.findByPk(req.params.id)
        res.json(author)
    } catch (err) {
        next(err)
    }
}

async function addAuthor(req, res, next) {
    let authorInfo = req.body;
    try {
        const author = await Author.create(authorInfo);
        res.status(201).json(author);
    } catch (error) {
        next(error);
    }

}

async function updateAuthor(req, res, next) {
    try {
        const author = await Author.findByPk(req.params.id);
        if (author) {
            await author.update(req.body);
            res.json(author);
        } else {
            res.status(404).json({
                message: 'author not found'
            });
        }
    } catch (error) {
        next(error);
    }
}

async function deleteAuthor(req, res, next) {
    try {
        const author = await Author.findByPk(req.params.id);
        if (author) {
            await author.destroy();
            res.json(author);
        } else {
            res.status(404).json({
                message: 'author not found'
            });
        }
    } catch (error) {
        next(error);
    }
}


module.exports = {
    addAuthor,
    getAuthors,
    getAuthorById,
    updateAuthor,
    deleteAuthor
}