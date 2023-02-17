var Pool = require('pg').Pool;
var pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'dvdrental',
  password: 'fathyfahrezy',
  port: 5432,
});

module.exports = pool;
