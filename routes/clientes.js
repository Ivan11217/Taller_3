const express = require('express');
const router = express.Router();
const { Cliente } = require('../models');

router.get('/', async (req, res) => {
  const clientes = await Cliente.findAll();
  res.render('clientes', { clientes });
});

router.post('/create', async (req, res) => {
  const { nombre, apellido } = req.body;
  await Cliente.create({ nombre, apellido });
  res.redirect('/clientes');
});

module.exports = router;
