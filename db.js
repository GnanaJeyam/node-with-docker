const { Client } = require('pg');

const client  = new Client({
    password: process.env.PG_PASSWORD, 
    database: process.env.PG_USER,
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT
});

(async() => {
    await client.connect();
    await client.query('CREATE TABLE IF NOT EXISTS test(data integer[])');
    await client.query('INSERT INTO test(data) VALUES (array[1, 2, 3, 4, 5])');
})();

module.exports = client;