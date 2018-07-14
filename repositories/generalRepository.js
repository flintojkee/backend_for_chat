function Repository() {}

Repository.prototype.getAll = getAll;
Repository.prototype.getById = getById;
Repository.prototype.deleteById = deleteById;
Repository.prototype.updateById = updateById;

function getAll(callback) {
    var model = this.model;
    var query = model.find();
    query.exec(callback);
}

function getById(id, callback) {
    var model = this.model;
    var query = model.findOne({
        _id: id
    });
    query.exec(callback);
}

function deleteById(id, callback) {
    let model = this.model;
    let query = model.findByIdAndRemove(id, function(err, doc){
        if(err) return console.log(err);
        console.log("Deleted ", doc);
    });
    query.exec(callback);
}

function updateById(id, data ,callback) {
    let model = this.model;
    let query = model.findByIdAndUpdate(id, data ,function (err, doc) {
        if(err) return console.log(err);
        console.log("Updated ", doc);
    });
    query.exec(callback);
}



module.exports = Repository;