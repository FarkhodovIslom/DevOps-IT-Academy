const express = require("express");
const app = express();
const db = require("./db");

db.connect((err) => {
    if (err) {
        console.error("Error: " + err);
        return;
    }
    console.log("Connected to database");
});

app.listen(1200, () => {
    console.log('Server starting on port 1200')
})