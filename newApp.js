"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
let partyName = "myParty";
let location = "myHouse";
let date = "11.11.2019";
let list;
var server = express();
let i = 0;
server.get('/party', (request, response) => {
    let str = partyName + " " + location + " " + date;
    response.send({ str });
});
server.post('/register', (request, response) => {
    list[i] = request.params.word;
    i++;
    // response.send({youSent: request.params.word});
});
server.get('/guests', (request, response) => {
    let str = list.toString();
    response.send({ str });
});
const port = 8080;
server.listen(port, function () {
    console.log(`API is listening on port ${port}`);
});
