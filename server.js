var express = require('express');
var app = express();
const port = 3000;

app.use('/public', express.static('public'));
//app.use(express.static('public')); чтоб работало в index.html меняем путь к my.css на css/my.css

app.get('/', function(req, res) {
	res.sendFile(__dirname+'/', 'index.html');
});

app.listen(port);
console.log('Server started');
