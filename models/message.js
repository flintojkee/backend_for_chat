const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
    msg: String,
    senderId : String,
    receiverId : String
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;