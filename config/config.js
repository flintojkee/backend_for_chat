module.exports = {
    dbname: "chatDB",
    uri: "mongodb://localhost/chatDB",
    opts: {
        auto_reconnect: true,
        poolSize: 40
    }
};