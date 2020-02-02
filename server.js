var express = require('express');
var app = express();
var port = 4000;

app.listen(process.env.port || port);

node port=3000 /web-api-auth-examples/authorization_code/app.js

