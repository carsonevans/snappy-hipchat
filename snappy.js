
var settings = require('./configuration.js');

function contact_created(request,response) {

    if (settings.server.verbose) {
        console.log('The contact_created function recieved the following request:');
        console.log(request);
    }

    response.writeHead('200', {"Content-Type": "text/plain"});
    response.write("Just playing for now...");
    return response;
}

function message_incoming(request,response) {

    if (settings.server.verbose) {
        console.log('The message_incoming function recieved the following request:');
        console.log(request);
    }

    response.writeHead('200', {"Content-Type": "text/plain"});
    response.write("Just playing for now...");
    return response;
}

function message_outgoing(request,response) {

    if (settings.server.verbose) {
        console.log('The message_outgoing function recieved the following request:');
        console.log(request);
    }

    response.writeHead('200', {"Content-Type": "text/plain"});
    response.write("Just playing for now...");
    return response;
}

function message_private(request,response) {

    if (settings.server.verbose) {
        console.log('The message_private function recieved the following request:');
        console.log(request);
    }

    response.writeHead('200', {"Content-Type": "text/plain"});
    response.write("Just playing for now...");
    return response;
}

function tags_changed(request,response) {

    if (settings.server.verbose) {
        console.log('The tags_changed function recieved the following request:');
        console.log(request);
    }

    response.writeHead('200', {"Content-Type": "text/plain"});
    response.write("Just playing for now...");
    return response;
}

function ticket_created(request,response) {

    if (settings.server.verbose) {
        console.log('The ticket_created function recieved the following request:');
        console.log(request);
    }

    response.writeHead('200', {"Content-Type": "text/plain"});
    response.write("Just playing for now...");
    return response;
}

function ticket_replied(request,response) {

    if (settings.server.verbose) {
        console.log('The ticket_replied function recieved the following request:');
        console.log(request);
    }

    response.writeHead('200', {"Content-Type": "text/plain"});
    response.write("Just playing for now...");
    return response;
}

function ticket_waiting(request,response) {

    if (settings.server.verbose) {
        console.log('The ticket_waiting function recieved the following request:');
        console.log(request);
    }

    response.writeHead('200', {"Content-Type": "text/plain"});
    response.write("Just playing for now...");
    return response;
}


exports.contact_created = contact_created;
exports.message_incoming = message_incoming;
exports.message_outgoing = message_outgoing;
exports.message_private = message_private;
exports.tags_changed = tags_changed;
exports.ticket_created = ticket_created;
exports.ticket_replied = ticket_replied;
exports.ticket_waiting = ticket_waiting;
