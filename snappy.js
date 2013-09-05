
var querystring = require('querystring');
var settings = require('./configuration.js');
var hipchat = require('./hipchat.js');

// function contact_created(data) {
//     console.log('contact_created: ' + querystring.stringify(data));
//     hipchat.send('html', '<b>Contact Created</b>');
//     hipchat.send('text', '/code ' + querystring.stringify(data));
// }

function message_incoming(data) {
    var message = 'New incoming message on ticket #' + data.ticket_id + ' by ' + data.creator.value + ':<br />'
    message += '<em>' + data.content + '</em><br />';
    hipchat.send('html', message);
}

function message_outgoing(data) {
    var message = 'New outgoing message on ticket #' + data.ticket_id + ' by ' + data.creator.value + ':<br />'
    message += '<em>' + data.content + '</em><br />';
    hipchat.send('html', message);
}

function message_private(data) {
    var message = 'New private message on ticket #' + data.ticket_id + ' by ' + data.creator.value + ':<br />'
    message += '<em>' + data.content + '</em><br />';
    hipchat.send('html', message);
}

function tags_changed(data) {
    var message = 'Ticket tags updated:<br />'
    message += 'Subject: ' + data.default_subject + '<br />';
    message += 'From: ' + data.opener.value + '<br />';
    if (data.added) {
        message += 'Added: ' + data.added + '<br />';
    }
    if (data.added) {
        message += 'Removed: ' + data.removed + '<br />';
    }

    hipchat.send('html', message);
}

function ticket_created(data) {
    var message = 'Ticket created:<br />'
    message += 'Subject: ' + data.default_subject + '<br />';
    message += 'From: ' + data.opener.value;
    hipchat.send('html', message);
}

function ticket_replied(data) {
    var message = 'Ticket marked replied:<br />'
    message += 'Subject: ' + data.default_subject + '<br />';
    message += 'From: ' + data.opener.value;
    hipchat.send('html', message);
}

function ticket_waiting(data) {
    var message = 'Ticket marked waiting:<br />'
    message += 'Subject: ' + data.default_subject + '<br />';
    message += 'From: ' + data.opener.value;
    hipchat.send('html', message);
}


//exports.contact_created = contact_created;
exports.message_incoming = message_incoming;
exports.message_outgoing = message_outgoing;
exports.message_private = message_private;
exports.tags_changed = tags_changed;
exports.ticket_created = ticket_created;
exports.ticket_replied = ticket_replied;
exports.ticket_waiting = ticket_waiting;
