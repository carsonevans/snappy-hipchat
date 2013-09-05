
var querystring = require('querystring');
var settings = require('./configuration.js');
var hipchat = require('./hipchat.js');

function contact_created(data) {
    console.log('contact_created: ' + querystring.stringify(data));
    hipchat.send('html', '<b>Contact Created</b>');
    hipchat.send('text', '/code ' + querystring.stringify(data));
}

function message_incoming(data) {
    console.log('message_incoming: ' + querystring.stringify(data));
}

function message_outgoing(data) {
    console.log('message_outgoing: ' + querystring.stringify(data));
}

function message_private(data) {
    console.log('message_private: ' + querystring.stringify(data));
}

function tags_changed(data) {
    console.log('tags_changed: ' + querystring.stringify(data));
}

function ticket_created(data) {
    console.log('ticket_created: ' + querystring.stringify(data));
}

function ticket_replied(data) {
    console.log('ticket_replied: ' + querystring.stringify(data));
}

function ticket_waiting(data) {
    console.log('ticket_waiting: ' + querystring.stringify(data));
}


exports.contact_created = contact_created;
exports.message_incoming = message_incoming;
exports.message_outgoing = message_outgoing;
exports.message_private = message_private;
exports.tags_changed = tags_changed;
exports.ticket_created = ticket_created;
exports.ticket_replied = ticket_replied;
exports.ticket_waiting = ticket_waiting;
