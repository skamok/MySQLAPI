var express = require('express');
var app = express();
const port = 3000;

var hbs = require('handlebars');

var regions = [{login: 'admin',
								firstname: 'adminfirst',
							  lastname: 'adminlast',
							  post: 'adminpost'},
								{login: 'Ivan',
								 firstname: 'adminfirst',
								 lastname: 'adminlast',
								 post: 'adminpost'},
							];

app.use('/public', express.static('public'));
//app.use(express.static('public')); чтоб работало в index.html меняем путь к my.css на css/my.css

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	//res.sendFile(__dirname+'/', 'index.html'); //стандартный вывод
	res.render('pages/index', {region: regions}); // вывод через EJS
});

app.listen(port);
console.log('Server started');
