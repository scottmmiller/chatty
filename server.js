var http = require('http');

var port = 9999;

var messages = [];

var onRequest = function(req, res) {
	if(req.method === "GET") {
		res.writeHead(200, {
			"Connection": 'close',
			"Content-Type": 'application/json',
			"Access-Control-Allow-Origin": '*'
		})
		res.end(JSON.stringify(messages));
		console.log(messages)
	}
	if(req.method === "POST") {
		var postData = '';
		req.on('data', function(chunk) {
			postData += chunk.toString();
		})
		req.on('end', function() {
			console.log("Got POST");
			console.log(JSON.parse(postData));
			messages.push(JSON.parse(postData));
			res.writeHead(200, {
				"Connection": 'close',
				"Content-Type": 'application/json',
				"Access-Control-Allow-Origin": '*'
			})
			res.end(postData);
		})
	}

};

http.createServer(onRequest).listen(port);
	console.log('listening on port ' + port);

