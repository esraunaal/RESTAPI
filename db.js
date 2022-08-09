const Pool = require("pg").Pool;

const pool = new Pool({
    users: "postgres",
    host: "localhost",
    database: "kisiler",
    password: "12345",
    port: 5432,
});

module.exports = pool;