const express = require('express');
const app = express();
const port = 3000;

// Import your vulnerable routers
const redosRouter = require('./nodejs/ReDos/redos.js');
const sqliRouter = require('./nodejs/SQL Injection/example2.js');

// Use the routers
app.use('/redos', redosRouter);
app.use('/sqli', sqliRouter);

app.listen(port, () => {
  console.log(`Vulnerable app listening on port ${port}`);
});