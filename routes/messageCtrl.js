const messageService = require("../services/message");
const userService = require("../services/user");

exports.getAllMessages = (req, res) =>{
    messageService.findAll((err, data) => {
        if (!err) {
            res.data = data;
            res.json(res.data);
        } else {
            res.status(400);
            res.end();
        }
    });
};

exports.getById = (req, res) =>{
    messageService.findOne(req.params.id, (err, data) => {
        if (!err) {
            res.data = data;
            res.json(res.data);
        } else {
            res.status(400);
            res.end();
        }
    });
};

exports.createMessage = (req, res) =>{
   messageService.createMessage(req.body, (msg, err) =>{
        if(!err){
            res.sendStatus(200);
        } else {
            res.sendStatus(400);
        }
    });
};

exports.deleteMessage = (req, res) =>{
    messageService.deleteMessage(req.params.id, err =>{

        if(!err){
            res.sendStatus(200);
        }else {
            res.sendStatus(400);
        }
    })
};

exports.updateMessage = (req, res) =>{
    messageService.updateMessage(req.params.id, req.body, (err, data) =>{
        if(!err){
            res.sendStatus(200);
        }else {
            res.sendStatus(400);
        }
    });
};

exports.getAllContacts = (req, res) => {
    messageService.getAllContacts(req.params.id, (err, data) =>{
        if(!err){
            console.log(data[0].receivers);
            userService.getAllById(data[0].receivers, (err, data) =>{
                res.data = data;
                res.json(res.data);
            });
        }else {
            res.sendStatus(400);
        }
    })
};