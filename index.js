const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const mongooseConnection = require("./db/dbconnect").connection;
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.use(
    session({
        secret: "sessionsecretsessionsecret",
        resave: true,
        saveUninitialized: true,
        store: new MongoStore({
            mongooseConnection: mongooseConnection
        })
    })
);

const staticPath = path.normalize(__dirname + "/public");
app.use(express.static(staticPath));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const routes = require("./routes/routes");
app.use('/api', routes);
app.listen(3000);
console.log("Listening on port 3000 ...");