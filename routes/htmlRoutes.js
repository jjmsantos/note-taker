const path = require("path");

const express = require("express");
const htmlRouter = express.Router();


htmlRouter.get("/index", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

htmlRouter.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

htmlRouter.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// If no matching route is found default to index
htmlRouter.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = htmlRouter;