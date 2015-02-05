var http = require('http');

var port = 9999;

var messages = ['this is a TEST'];

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
		res.writeHead(200, {
			"Connection": 'close',
			"Content-Type": 'application/json',
			"Access-Control-Allow-Origin": '*'
		})
	}

};

http.createServer(onRequest).listen(port);
	console.log('listening on port ' + port);

