var express = require('express');
var router = express.Router();
var database = require('../../database');

/* GET Product listing. */
router.get('/', async (req, res) => {
  let products = await database.query('SELECT * FROM producto');
  res.render('admin/products', { products: products, layout: 'admin' })
})

module.exports = router;
