const router = require("express").Router();
const userService = require("../services/user");


exports.getAllUsers = (req, res) =>{
    userService.findAll((err, data) => {
        if (!err) {
            res.data = data;
            res.json(res.data);
        } else {
            res.status(400);
            res.end();
        }
    });
};

exports.createUser = (req, res) =>{
    userService.createUser(req.body, (user, err) =>{
        if(!err){
            res.sendStatus(200);
        } else {
            res.sendStatus(400);
        }
    });
};

exports.deleteUser = (req, res) =>{
    userService.deleteUser(req.params.id, err =>{

        if(!err){
            res.sendStatus(200);
        }else {
            res.sendStatus(400);
        }
    })
};

exports.updateUser = (req, res) =>{

    userService.updateUser(req.params.id, req.body, (err, data) =>{
        if(!err){
            res.sendStatus(200);
        }else {
            res.sendStatus(400);
        }
    });
};