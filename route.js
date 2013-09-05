var snappy = require("./snappy");
var settings = require('./configuration.js');

function route(pathname, request, response) {

    // remove leading slash, trailing slash
    pathname = pathname.replace(/^\/|\/$/g,'');

    // replace all other slahes with underscores
    pathname = pathname.replace(/\//g,'_');

    if (typeof(snappy[pathname]) === 'function') {
        data = '';
        request.on('data', function(chunk) {
            data += chunk.toString();
        });

        request.on('end', function() {
            // empty 200 OK
            response.writeHead(200, "OK", {'Content-Type': 'text/html'});

            // send to defined snappy function
            snappy[pathname](querystring.parse(data));
        });

    } else {
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("Function " + pathname + " not supported.");
    }

    return response;
}

exports.route = route;
