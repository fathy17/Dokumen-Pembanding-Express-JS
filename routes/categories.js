var express = require('express');
var router = express.Router();

var pool = require('../query.js');

router.get('/', function (req, res) {
  pool.query('SELECT * FROM category', (error, results) => {
    if (error) {
      throw error;
    }
    res.send(results.rows);
  });
});

router.get('/:category', function (req, res) {
  pool.query(
    `SELECT * FROM film_category fc INNER JOIN film f ON fc.film_id = f.film_id INNER JOIN category c ON fc.category_id = c.category_id WHERE c.name = '${req.params.category}'`,
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
