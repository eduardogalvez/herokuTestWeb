var express = require('express');
var app = express();
var port = 4000;


node port=3000 /web-api-auth-examples/authorization_code/app.js
app.listen(process.env.port || port);


app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.render('index');
})

app.listen(port, function() {
	console.log('app running')
})



