// const express = require('express')
import express from 'express';
import cors from 'cors'
import HelloController from "./controllers/hello-controller.js"
import UserController from "./controllers/users/users-controller.js"
import TuitsController from "./controllers/tuits/tuits-controller.js";
import mongoose from "mongoose";


const app = express()
app.use(cors({
    credentials: true,
    origin: true
}))
app.use(express.json());
const CONNECTION_STRING = 'mongodb://localhost:27017/tuiter' || process.env.DB_CONNECTION_STRING
mongoose.connect(CONNECTION_STRING);
TuitsController(app);
HelloController(app)
UserController(app)
app.listen(process.env.PORT || 4000)