const express = require('express');
const app = express();

// app = server
// get = a route handler
// app.post, app.put, app.delete, app.patch... 
// req = data about the request, who and association data
// res = response about to be sent
app.get('/', (req,res) => {
	res.send({hello: "world"});	
});

// environment variable access = process.env.PORT or whatever port it is.

// tell node to listen to 5000 heroku would require a dynamically binded port
app.listen(5000);
