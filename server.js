var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var httpProxy = require('http-proxy');
var bundler = require('./lib/bundler.js'); 
var proxy = httpProxy.createProxyServer(); 

var staticOptions = {
	dotfiles: 'ignore',
	etag: true,
	extensions: ['js', 'css', 'html'],
	maxAge: '1d',
	redirect: false,
	setHeaders: function (res, path, stat) {
		res.set('x-timestamp', Date.now());
	}
};

// create a json parser that parses any request with a body
var jsonParser = bodyParser.json({ type: function () { return true } })

app.get('/health', function (req, res, next) {
	res.send('OK');
});

bundler();

// Any requests to localhost:3000/build is proxied
// to webpack-dev-server
app.all('/dist/*', function (req, res) {
	proxy.web(req, res, {
	    target: 'http://localhost:8081'
	});
});


//Serve static templates + assets
app.use('/', express.static('static', staticOptions));

var server = app.listen(8080, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Static server is listening at http://%s:%s', host, port);
});