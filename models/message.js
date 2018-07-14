const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
    msg: String,
    senderId : { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    receiverId : { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;