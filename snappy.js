
var querystring = require('querystring');
var util = require('util');
var settings = require('./configuration.js');
var hipchat = require('./hipchat.js');

// function contact_created(data) {
//     console.log('contact_created: ' + querystring.stringify(data));
//     hipchat.send('html', '<b>Contact Created</b>');
//     hipchat.send('text', '/code ' + querystring.stringify(data));
// }

function message_incoming(data) {
    console.log('message_incoming: ' + util.inspect(data));
    var message = 'Ticket #<a href="https://app.besnappy.com/home#ticket/' + data.note.ticket_id + '">' + data.note.ticket_id + '</a>, ';
    message += data.note.opener.value + ' - ' + data.note.ticket.default_subject + '<br />';
    message += '- Incoming message from ' + data.note.creator.value + ':<br />';
    //message += '<em>' + data.content + '</em><br />';
    hipchat.send('html', message);
}

function message_outgoing(data) {
    console.log('message_outgoing: ' + util.inspect(data));
    var message = 'Ticket #<a href="https://app.besnappy.com/home#ticket/' + data.note.ticket_id + '">' + data.note.ticket_id + '</a>, ';
    message += data.note.opener.value + ' - ' + data.note.ticket.default_subject + '<br />';
    message += '- Outgoing message from ' + data.note.creator.value + ':<br />';
    message += '<em>' + data.content + '</em><br />';
    hipchat.send('html', message);
}

function message_private(data) {
    console.log('message_private: ' + util.inspect(data));
    var message = 'Ticket #<a href="https://app.besnappy.com/home#ticket/' + data.note.ticket_id + '">' + data.note.ticket_id + '</a>, ';
    message += data.note.opener.value + ' - ' + data.note.ticket.default_subject + '<br />';
    message += ' - Private message from ' + data.note.creator.value + ':<br />';
    //message += '<em>' + data.content + '</em><br />';
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
    console.log('ticket_created: ' + util.inspect(data));
    var message = 'Ticket #<a href="https://app.besnappy.com/home#ticket/' + data.ticket.id + '">' + data.ticket.id + '</a>, ';
    message += data.ticket.opener.value + ' - ' + data.ticket.default_subject + '<br />';
    //message += ' - ' + data.ticket.summary;
    message += ' - Created <br />';
    hipchat.send('html', message);
}

function ticket_replied(data) {
    console.log('ticket_replied: ' + util.inspect(data));
    var message = 'Ticket #<a href="https://app.besnappy.com/home#ticket/' + data.ticket.id + '">' + data.ticket.id + '</a>, ';
    message += data.ticket.opener.value + ' - ' + data.ticket.default_subject + '<br />';
    //message += ' - ' + data.ticket.summary;
    message += ' - Marked Replied <br />';
    hipchat.send('html', message);
}

function ticket_waiting(data) {
    console.log('ticket_waiting: ' + util.inspect(data));
    var message = 'Ticket #<a href="https://app.besnappy.com/home#ticket/' + data.ticket.id + '">' + data.ticket.id + '</a>, ';
    message += data.ticket.opener.value + ' - ' + data.ticket.default_subject + '<br />';
    //message += ' - ' + data.ticket.summary;
    message += ' - Marked Waiting <br />';
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
