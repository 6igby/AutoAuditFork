const express = require('express');
const router = express.Router();
const db = require('some-database-module'); // This is a fake module for illustration

let noor = "noor";
// A highly vulnerable SQL injection endpoint
router.get("/user", (req, res) => {
    // This is UNSAFE! User input is directly concatenated into the query
    const userId = req.query.id;
    const query = `SELECT * FROM users WHERE id = ${userId}`; 

    // Imagine this executes the query
    db.query(query, (err, result) => {
        if (err) {
            res.status(500).send('Error');
        } else {
            res.json(result);
        }
    });
});

module.exports = router;