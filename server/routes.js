// Routes.js - Módulo de rutas
var express = require('express');
var router = express.Router();
 const mensajes = [
  {
    _id: 'XXX',
    user: 'spiderman',
    mensaje: 'Janus'
  }
 ];






// Get mensajes
router.get('/', function (req, res) {
  res.json('Obteniendo mensajes');
});




module.exports = router;