var express = require('express');
var app = express();
const port = 3000;

app.use('/public', express.static('public'));

app.get('/', function(req, res) {
	res.sendFile(__dirname+'/', 'index.html');
});

app.listen(port);
console.log('Server started');
