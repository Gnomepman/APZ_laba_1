const express = require("express");
const app = express();
require('dotenv').config();

app.get("/", (request, response) => {
    response.send(process.env.RESPONSE);
});

// app.use("/test", (req, res) => {
//     res.send({ message: process.env.RESPONSE });
//     res.end();
// });

module.exports = app;

