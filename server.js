var express = require('express');
var app = express();
const port = 3000;

app.get('/my.css', function(req, res) {
	res.sendFile(__dirname+'/', 'my.css');
});
app.get('/', function(req, res) {
	res.sendFile(__dirname+'/', 'index.html');
});

app.listen(port);
console.log('Server started');
