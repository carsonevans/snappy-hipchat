
function ticket_created(request,response) {


    console.log(request);

    response.writeHead('200', {"Content-Type": "text/plain"});
    response.write("Inside the ticket_created function");
    return response;
}

exports.ticket_created = ticket_created;
