// Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

module.exports = function (app) {
    // Basic route
    app.get("/", function (req, res) {
        var filepath = path.join(__dirname, "../public/home.html");
        console.log(`Sending ${filepath}`);
        res.sendFile(filepath);
    });
    //route to Survey.html
    app.get("/survey", function (req, res) {
        let filepath = path.join(__dirname, "../public/survey.html");
        console.log(`Sending ${filepath}`);
        res.sendFile(filepath);
    });
}
