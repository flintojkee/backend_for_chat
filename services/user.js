const UserRepository = require("../repositories/UserRepository");

module.exports = {
    findAll: callback => {
        UserRepository.getAll((err, data) => {
            callback(null, data);
        });
    },

    findOne: (id, callback) => {
        UserRepository.getById(id, (err, data) => {
            callback(err, data);
        });
    },
    getAllById:(ids, callback) => {
        UserRepository.getAllById(ids, (err, data) =>{
            callback(err, data);
        })
    },

    createUser: (userData, callback) =>{
        UserRepository.createUser(userData, (err, data) =>{
            callback(err, data);
        });
    },
    deleteUser: (id, callback ) =>{
        UserRepository.deleteById(id, (err, data) =>{
            callback(err, data);
        })
    },
    updateUser: (id, data , callback) => {
        UserRepository.updateById(id, data, (err, data) => {
            callback(err, data);
        })
    }
};