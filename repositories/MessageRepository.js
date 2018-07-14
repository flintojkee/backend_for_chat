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

    let query = model.aggregate(
        [
            {
                $match: {
                        $or:[
                            {senderId:id},
                            {receiverId:id}
                            ]
                        }
            },
            {
                $group : {
                    _id : null,
                    receivers: { $addToSet: "$receiverId" }
                }
            }
        ]
    );
    query.exec(callback);

}

MessageRepository.prototype = new Repository();
MessageRepository.prototype.createMessage = createMessage;
MessageRepository.prototype.getAllContacts = getAllContacts;
module.exports = new MessageRepository();