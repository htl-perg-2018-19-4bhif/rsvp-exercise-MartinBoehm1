import {CREATED, BAD_REQUEST, UNAUTHORIZED} from 'http-status-codes';
import * as loki from 'lokijs';
import * as express from 'express';
import * as basic from 'express-basic-auth';
let partyName="myParty";
let location="myHouse";
let date="11.11.2019";
var server = express();
const db = new loki(__dirname + '/db.dat', {autosave: true, autoload: true});
let guests = db.getCollection('guests');
if (!guests) {
    guests = db.addCollection('guests');
  }
server.get('/party', (request, response) => {
    let str=partyName+" "+location+" "+date;
    response.send({str});
});
server.post('/register', (request, response) => {
    const newDoc = guests.insert({firstName: request.body.firstName, lastName: request.body.lastName});
    response.status(CREATED).send(newDoc);
});
server.get('/guests', (request, response) => {
    response.send(guests.find());
});
const port = 8080;
server.listen(port, function() {
  console.log(`API is listening on port ${port}`);
});