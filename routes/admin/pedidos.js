var express = require('express');
var router = express.Router();
var database = require('../../database');

/* GET Product listing. */
router.get('/', async (req, res) => {
  let products = await database.query('SELECT * FROM producto');
  res.render('admin/pedidos', { pedidos: pedidos, layout: 'admin' })
})

module.exports = router;
