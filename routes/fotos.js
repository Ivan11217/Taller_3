var express = require('express');
var router = express.Router();
module.exports = router;

const Sequelize = require('sequelize');
const Foto = require('../models').foto;
const Etiqueta = require('../models').etiqueta;

// Ruta para devolver los datos en formato JSON incluyendo etiquetas
router.get('/findAll/json', async function(req, res, next) {
  try {
    const fotos = await Foto.findAll({
      attributes: { exclude: ["updatedAt"] },
      include: [{
        model: Etiqueta,
        attributes: ['texto'],
        through: { attributes: [] }
      }]
    });
    res.json(fotos);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Ruta para devolver los datos en formato de vista
router.get('/findAll/view', async function(req, res, next) {
  try {
    const fotos = await Foto.findAll({
      attributes: { exclude: ["updatedAt"] },
      include: [{
        model: Etiqueta,
        attributes: ['texto'],
        through: { attributes: [] }
      }]
    });
    res.render('fotos', { title: 'Fotos', arrFotos: fotos });
  } catch (error) {
    res.status(400).send(error);
  }
});
