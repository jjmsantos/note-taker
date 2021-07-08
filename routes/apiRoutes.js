const express = require("express");
const apiRouter = express.Router();
const fs = require("fs");

apiRouter.get("/api/notes", (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (error, file) => {
        if (error) throw error;
        const dbFile = JSON.parse(file);
        return res.send(dbFile);
    });
});

apiRouter.post("/api/notes", (req, res) => {
    let note = req.body;
    note["title"] = req.body.title;
    note["text"] = req.body.text;

    fs.readFile('./db/db.json', 'utf8', (error, file) => {
        if (error) throw error;

        const dbFile = JSON.parse(file);
        dbFile.push(note);

        const newNote = JSON.stringify(dbFile);

        fs.writeFile('./db/db.json', newNote, 'utf8', (err) => {
            if (err) throw err;
        });
        
        return res.send(JSON.parse(newNote));
    });    
});


module.exports = apiRouter;