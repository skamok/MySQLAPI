var mysql = require('mysql');
var connection = mysql.createConnection({
	host:'localhost',
	user:'root'
	//password:'root'
});
connection.connect(function (err){
	if (err) {
		console.error('Error connecting: '+err.stack);
		return;
	}
console.log('connected as id ' + connection.threadId);
});

connection.query({
	sql: 'SELECT * FROM `ksmdb`.`user` WHERE `login`=?;',
	timeout: 10000,
	values: ['Ivan']
}, function (error, results, fields) {
	   if (error) {
			            console.error('Error query: '+error.stack);
		 } else {
	              console.log(results);
		        }
}
);

connection.end(function (err){
	if (err) {
		console.error('Error disconnecting: '+err.stack);
		return;
	}
console.log('disconnected as id ' + connection.threadId);
});
