const express = require('express')();
const client = require('./db');
const port = process.env.PORT_NO || 3000

express.get('/', async (req, response) => {
  const data = await client.query('SELECT data FROM test', (err, res) => {
    response.send(
        {
            message: "Hello from Docker !",
            data: res.rows[0]
        }
    );
  });  
})

express.listen(port);