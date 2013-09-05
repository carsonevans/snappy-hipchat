
var querystring = require('querystring');
var settings = require('./configuration.js');
var hipchat = require('./hipchat.js');

// function contact_created(data) {
//     console.log('contact_created: ' + querystring.stringify(data));
//     hipchat.send('html', '<b>Contact Created</b>');
//     hipchat.send('text', '/code ' + querystring.stringify(data));
// }

function message_incoming(data) {
    console.log('message_incoming: ' + querystring.stringify(data));
    var message = 'Ticket #' + data.ticket_id + ' :: <em>' + data.ticket.default_subject + '</em> (' + data.ticket.opener.first_name + ' ' + data.ticket.opener.last_name + ')<hr />';
    message += '- Incoming message from ' + data.creator.value + ':<br />'
    message += '<em>' + data.content + '</em><br />';
    hipchat.send('html', message);
}

function message_outgoing(data) {
    console.log('message_outgoing: ' + querystring.stringify(data));
    var message = 'Ticket #' + data.ticket_id + ' :: <em>' + data.ticket.default_subject + '</em> (' + data.ticket.opener.first_name + ' ' + data.ticket.opener.last_name + ')<hr />';
    message += '- Outgoing message from ' + data.creator.value + ':<br />'
    message += '<em>' + data.content + '</em><br />';
    hipchat.send('html', message);
}

function message_private(data) {
    console.log('message_private: ' + querystring.stringify(data));
    var message = 'Ticket #' + data.ticket_id + ' :: <em>' + data.ticket.default_subject + '</em> (' + data.ticket.opener.first_name + ' ' + data.ticket.opener.last_name + ')<hr />';
    message += '- Private message from ' + data.creator.value + ':<br />'
    message += '<em>' + data.content + '</em><br />';
    hipchat.send('html', message);
}

// function tags_changed(data) {
//     var message = 'Ticket tags updated:<br />'
//     message += 'Subject: ' + data.default_subject + '<br />';
//     //message += 'From: ' + data.opener.value + '<br />';
//     if (data.added) {
//         message += 'Added: ' + data.added + '<br />';
//     }
//     if (data.added) {
//         message += 'Removed: ' + data.removed + '<br />';
//     }

//     hipchat.send('html', message);
// }

function ticket_created(data) {
    console.log('ticket_created: ' + querystring.stringify(data));
    var message = 'Ticket #' + data.ticket_id + ' :: <em>' + data.ticket.default_subject + '</em> (' + data.ticket.opener.first_name + ' ' + data.ticket.opener.last_name + ')<hr />';
    message += '- Created';
    hipchat.send('html', message);
}

function ticket_replied(data) {
    console.log('ticket_replied: ' + querystring.stringify(data));
    var message = 'Ticket #' + data.ticket_id + ' :: <em>' + data.ticket.default_subject + '</em> (' + data.ticket.opener.first_name + ' ' + data.ticket.opener.last_name + ')<hr />';
    message += '- Marked Replied';
    hipchat.send('html', message);
}

function ticket_waiting(data) {
    console.log('ticket_waiting: ' + querystring.stringify(data));
    var message = 'Ticket #' + data.ticket_id + ' :: <em>' + data.ticket.default_subject + '</em> (' + data.ticket.opener.first_name + ' ' + data.ticket.opener.last_name + ')<hr />';
    message += '- Marked Waiting';
    hipchat.send('html', message);
}


//exports.contact_created = contact_created;
exports.message_incoming = message_incoming;
exports.message_outgoing = message_outgoing;
exports.message_private = message_private;
//exports.tags_changed = tags_changed;
exports.ticket_created = ticket_created;
exports.ticket_replied = ticket_replied;
exports.ticket_waiting = ticket_waiting;
