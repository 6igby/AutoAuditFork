const express = require('express');
const router = express.Router();
const db = require('some-database-module'); // This is a fake module for illustration

let noor = "noor"  //added a linitng error - missing semicolon, double quotes, unused variables

//Vulnerable SQL injection 
router.get("/user", (req, res) => {
    const userId = req.query.id;

    //here i am allowing the user input directly into the database without any protection -> breaking security rules
    const query = `SELECT * FROM users WHERE id = ${userId}`; 

    db.query(query, (err, result) => {
        if (err) {
            res.status(500).send('Error');
        } else {
            res.json(result);
        }
    });
});

module.exports = router;