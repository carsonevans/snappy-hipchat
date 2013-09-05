var snappy = require("./snappy");
var settings = require('./configuration.js');

function route(pathname, request, response) {

    // remove leading slash, trailing slash
    pathname = pathname.replace(/^\/|\/$/g,'');

    // replace all other slahes with underscores
    pathname = pathname.replace(/\//g,'_');

    if (typeof(snappy[pathname]) === 'function') {
        response = snappy[pathname](request,response);
    } else {
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("Function " + pathname + " not supported.");
    }

    return response;
}

exports.route = route;