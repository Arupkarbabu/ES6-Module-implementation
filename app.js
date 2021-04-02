//const fs = require("fs");
//const express = require("express");
import express from "express";
//const resHandler = require("./response-handler.js");
//import resHandler from "./response-handler.js";
import { resHandler } from "./response-handler.js";
const app = express();

//incomming get requested
app.get("/", resHandler);

app.listen(8080);
