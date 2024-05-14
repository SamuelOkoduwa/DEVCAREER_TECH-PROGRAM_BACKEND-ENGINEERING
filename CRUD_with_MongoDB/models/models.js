const mongoose = require('mongoose')

// Modeling the schema
const Schema = mongoose.Schema

// Custom validation function to check if a value is less than or equal to the current year
const maxCurrentYear = function() {
	return new Date().getFullYear();
  };

const BookModelSchema = new Schema({
	title: {
		type: String,
		required: true
	},

	year: {
		type: Number,
		required: true,
		max: [maxCurrentYear(), 'Year must not exit']
	},

	Isbn: {
		type: String,
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now()
	},

	updateAt: {
		type: Date,
		default: Date.now()
	}
})

module.exports = mongoose.model('books', BookModelSchema) 	//book collection name