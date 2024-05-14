const mongoose = require('mongoose')
require('dotenv').config()

// MongoDb Connection encription string
const mongo_Db_Connection = process.env.Mongo_Db_Connection;

// MongoDb Connection
function mongoConnect(){
	mongoose.connect(mongo_Db_Connection)

	mongoose.connection.on('connected', ()=>{
		console.log('MongoDb connected Successfully')
	})

	mongoose.connection.on('error', (err)=>{
		console.log(err)
		console.log('An error occured!')
	})
}

module.exports = { mongoConnect }