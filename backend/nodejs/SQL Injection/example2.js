const express = require('express');
const router = express.Router();
const db = require('some-database-module'); // This is a fake module for illustration

let noor = "noor"  //added a linitng error - missing semicolon, double quotes, unused variables


// Create an in-memory database
let db = new sqlite3.Database(':memory:');

// ❌ Vulnerable SQL injection endpoint
router.get("/user", (req, res) => {
    const userId = req.query.id;

    // ❌ Direct string concatenation (vulnerable)
    const query = `SELECT * FROM users WHERE id = ${userId}`; 

    db.all(query, [], (err, rows) => {
        if (err) {
            res.status(500).send('Error');
        } else {
            res.json(rows);
        }
    });
});

module.exports = router;