require("dotenv").config();

const CONFIG = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    dialet: "mysql",
}

module.exports = CONFIG;