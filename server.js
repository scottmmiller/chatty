var express = require('express');

var bodyParser = require('body-parser');

var messages = ["hello world"];

var app = express();
var port = 9999;

app.listen(port);

app.use(bodyParser.json());

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.get('/', function(req, res) {
	res.type('application/json');
	return res.json(messages);
});


app.post('/', function(req, res) {
	messages.push(req.body);
	console.log(messages);
	res.json(messages);
});



//******************************
// var http = require('http');

// var port = 9999;

// var messages = [];

// var onRequest = function(req, res) {
// 	console.log(req.method)
// 	if(req.method === "GET") {
// 		res.writeHead(200, {
// 			"Connection": 'close',
// 			"Content-Type": 'application/json',
// 			"Access-Control-Allow-Origin": '*'
// 		})
// 		res.end(JSON.stringify(messages));
// 		console.log(messages)
// 	}
// 	if(req.method === "POST") {
// 		console.log("POST")
// 		var postData = '';
// 		req.on('data', function(chunk) {
// 			postData += chunk.toString();
// 		})
// 		req.on('end', function() {
// 			console.log("Got POST");
// 			console.log(JSON.parse(postData));
// 			messages.push(JSON.parse(postData));
// 			res.writeHead(200, {
// 				"Connection": 'close',
// 				"Content-Type": 'application/json',
// 				"Access-Control-Allow-Origin": '*'
// 			})
// 			res.end(postData);
// 		})
// 	}
// 	if(req.method === 'OPTIONS') {
// 		res.writeHead(200, {
// 			'Connection': 'close',
// 			'Content-Type': 'application/json',
// 			'Access-Control-Allow-Origin': '*',
// 			'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
// 			'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
// 		});
// 		res.end();
// 	}

// };

// http.createServer(onRequest).listen(port);
// 	console.log('listening on port ' + port);
