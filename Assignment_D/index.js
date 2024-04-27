const http = require('http');
const fs = require('fs');

// create a server
const server = http.createServer((req, res)=>{
	// Setting response headers
	res.setHeader('Content-Type', 'application/json');
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

	// Route for creating users
	if (req.method === 'POST' && req.url === '/users/CreateUser'){
		let body = '';
		req.on('data', (chunk)=>{
			body += chunk.toString();
		});
		req.on('end', ()=>{
			const credentials = JSON.parse(body);
			const users = readDataFromFile(userFilePath);
			const user = users.find(u => u.username === credentials.username && u.password === credentials.password);
			if (user){
				res.end(JSON.stringify({ message: 'Authentication successful', user}))
			} else {
				res.statusCode = 401;
				res.end(JSON.stringify({ message: 'Authentication failed' }))
			}
		})

		// Route to get all users
		

	}
	
})

// start the server
const PORT = 3000;
server.listen(PORT, ()=>{
	console.log(`Server is running on http://localhost:${PORT}`)
})


