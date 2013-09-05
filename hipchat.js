
function send(message_format, message) {

    var settings = require('./configuration.js');
    var querystring = require('querystring');
    var http = require('http');

    // Build the post string from an object
    var post_data = querystring.stringify({
      'auth_token' : settings.hipchat.auth_token,
      'room_id': settings.hipchat.room_id,
      'from':  settings.hipchat.from,
      'message_format' : message_format,
      'message' : message
    });

    // An object of options to indicate where to post to
    var post_options = {
      host: 'api.hipchat.com',
      port: '80',
      path: '/v1/rooms/message',
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': post_data.length
      }
    };

    // Set up the request
    var post_req = http.request(post_options, function(res) {
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
          console.log('Response: ' + chunk);
      });
    });

    // post the data
    post_req.write(post_data);
    post_req.end();
}

exports.send = send;
