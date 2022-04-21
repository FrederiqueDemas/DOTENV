
const express = require("express");

require("dotenv").config();

const app = express();

app.get("/*", (req, res) => {
    res.send(`I am ${process.env.MY_NAME}, wilder in ${process.env.MY_CITY}, and I love ${process.env.MY_LANGUAGE}`);
})

module.exports = app