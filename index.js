/**
 * Module dependencies.
 */

var express = require('express');

// Path to our public directory

var pub = __dirname;
console.log(pub)
// setup middleware

var app = express();
app.use(express.static(pub));

// Optional since express defaults to CWD/views

//app.set('views', __dirname);

// Set our default template engine to "jade"
// which prevents the need for extensions
// (although you can still mix and match)
app.set('view engine', 'jade');


app.get('/', function(req, res){
    res.send('index.html');
});

app.listen(8081);
console.log('Express app started on port %d', 8081);