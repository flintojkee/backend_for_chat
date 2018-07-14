const MessageRepository = require("../repositories/MessageRepository");

module.exports = {
    findAll: callback => {
        MessageRepository.getAll((err, data) => {
            callback(null, data);
        });
    },

    findOne: (id, callback) => {
        MessageRepository.getById(id, (err, data) => {
            callback(err, data);
        });
    },
    createMessage: (messageData, callback) =>{
        MessageRepository.createMessage(messageData, (err, data) =>{
            callback(err, data);
        });
    },
    deleteMessage: (id, callback ) =>{
        MessageRepository.deleteById(id, (err, data) =>{
            callback(err, data);
        })
    },
    updateMessage: (id, data , callback) => {
        MessageRepository.updateById(id, data, (err, data) => {
            callback(err, data);
        })
    },
    getAllContacts: (id,callback) =>{
        MessageRepository.getAllContacts(id, (err, data) =>{
            callback(err, data);
        })
    }
};