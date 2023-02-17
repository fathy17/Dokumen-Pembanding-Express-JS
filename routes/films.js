var express = require('express');
var router = express.Router();

var pool = require('../query.js');

router.get('/', function (req, res) {
  pool.query('SELECT * FROM film', (error, results) => {
    if (error) {
      throw error;
    }
    res.send(results.rows);
  });
});

router.get('/:id', function (req, res) {
  pool.query(
    `SELECT * FROM film WHERE film_id = ${req.params.id}`,
    (error, results) => {
      if (error) {
        throw error;
      }
      res.send(results.rows);
    }
  );
});

//export this router to use in our index.js
module.exports = router;
