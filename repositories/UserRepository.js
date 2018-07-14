const connection = require("../db/dbconnect");
const Repository = require("./generalRepository");
const User = require("../models/user");


function UserRepository() {
    Repository.prototype.constructor.call(this);
    this.model = User;
}

function createUser(userData, callback) {
    let model = this.model;
    let query = model.create(userData);
    query.then(callback)
}

UserRepository.prototype = new Repository();
UserRepository.prototype.createUser = createUser;
module.exports = new UserRepository();