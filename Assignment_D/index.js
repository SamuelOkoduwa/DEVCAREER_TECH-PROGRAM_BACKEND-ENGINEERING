const http = require('http');
const fs = require('fs');

// File paths for storing user and book data
const usersFilePath = './users.json';
const booksFilePath = './books.json';

// Helper function to read data from a file
function readDataFromFile(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error(`Error reading data from ${filePath}:`, err);
        return [];
    }
}

// Helper function to write data to a file
function writeDataToFile(filePath, data) {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    } catch (err) {
        console.error(`Error writing data to ${filePath}:`, err);
    }
}

// Create a new HTTP server
const server = http.createServer((req, res) => {
    // Set response headers
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Route for exporting users data
    if (req.method === 'GET' && req.url === '/export/users') {
        const users = readDataFromFile(usersFilePath);
        res.setHeader('Content-Disposition', 'attachment; filename=users.json');
        res.end(JSON.stringify(users));
    }

    // Route for exporting books data
    else if (req.method === 'GET' && req.url === '/export/books') {
        const books = readDataFromFile(booksFilePath);
        res.setHeader('Content-Disposition', 'attachment; filename=books.json');
        res.end(JSON.stringify(books));
    }

    // Handle invalid routes
    else {
        res.statusCode = 404;
        res.end(JSON.stringify({ message: 'Route not found' }));
    }
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
