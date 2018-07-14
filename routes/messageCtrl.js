const messageService = require("../services/message");


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
