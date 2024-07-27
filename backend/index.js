// backend/index.js
const express = require("express");
const mainRouter = require("./router/index");
const cors = require("cors");

const app = express();

app.use(cors());

app.use("/api/v1", mainRouter);

app.listen(3000);
