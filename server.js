var express = require('express');
var http = require('http');
var URI = require("uri-js");
var SerializedObject = require('ripple-lib').SerializedObject;
require("./ripple-uri-parser");
var app = express();

app.get('/', function(request, response){

    var uri = request.query["uri"];
    response.header("Access-Control-Allow-Origin","*");

    if(uri == undefined)
    {
        response.json({error: "Empty URI"});
        console.log("ERROR: No URI provided.");
        response.end();
    }

    var uri_obj = URI.parse(uri);
    response.json(uri_obj);
    console.log(uri);
    console.log(JSON.stringify(uri_obj, null, '\t'));
    response.end();
});

http.createServer(app).listen(8888, function(){
    console.log("Server listening on port 8888");
});




