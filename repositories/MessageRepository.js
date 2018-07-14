const connection = require("../db/dbconnect");
const Repository = require("./generalRepository");
const Message = require("../models/message");


function MessageRepository() {
    Repository.prototype.constructor.call(this);
    this.model = Message;
}

function createMessage(messageData, callback) {
    let model = this.model;
    let query = model.create(messageData);
    query.then(callback)
}

function getAllContacts(id, callback) {
    let model = this.model;
    let querry = model
}

MessageRepository.prototype = new Repository();
MessageRepository.prototype.createMessage = createMessage;
module.exports = new MessageRepository();