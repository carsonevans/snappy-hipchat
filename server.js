var http = require("http");
var url = require("url");
var settings = require('./configuration.js');

function start(route) {
    function onRequest(request, response) {

        var pathname = url.parse(request.url).pathname;
        if (settings.server.verbose) {
            console.log("Request for " + pathname + " received.");
        }

        response = route(pathname, request, response);
        response.end();
    }

    http.createServer(onRequest).listen(settings.server.port);
    if (settings.server.verbose) {
        console.log("Server has started.");
    }
}

exports.start = start;
