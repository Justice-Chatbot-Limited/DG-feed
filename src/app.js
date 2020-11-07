import express from "express";
import * as bodyParser from "body-parser";
import cors from "cors";
import { decodeBase64 } from "bcryptjs";


require('dotenv').config({ path: ".env"});
const app = express();
const APP_PORT = process.env.APP_PORT || 8080;

//const feedRoutes = require('./routes/feed');
//
//const app = express();
//
//// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
//app.use(bodyParser.json()); // application/json
//
//app.use((req, res, next) => {
//    res.setHeader('Access-Control-Allow-Origin', '*');
//    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
//    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//    next();
//});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
db.sequelize.sync();
app.use(require("../src/routers/auth.routes"));
app.use(require("../src/routers/post.feed.routes"));

app.listen(APP_PORT, () =>{});
