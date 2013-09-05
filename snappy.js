
var settings = require('./configuration.js');

function contact_created(data) {
    console.log('contact_created: ' + data);
}

function message_incoming(data) {
    console.log('message_incoming: ' + data);
}

function message_outgoing(data) {
    console.log('message_outgoing: ' + data);
}

function message_private(data) {
    console.log('message_private: ' + data);
}

function tags_changed(data) {
    console.log('tags_changed: ' + data);
}

function ticket_created(data) {
    console.log('ticket_created: ' + data);
}

function ticket_replied(data) {
    console.log('ticket_replied: ' + data);
}

function ticket_waiting(data) {
    console.log('ticket_waiting: ' + data);
}


exports.contact_created = contact_created;
exports.message_incoming = message_incoming;
exports.message_outgoing = message_outgoing;
exports.message_private = message_private;
exports.tags_changed = tags_changed;
exports.ticket_created = ticket_created;
exports.ticket_replied = ticket_replied;
exports.ticket_waiting = ticket_waiting;
