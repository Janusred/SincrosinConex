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


 
/* Post mensaje*/
router.post('/', function (req, res) {
   const mensaje = {
    mensaje: req.body.mensaje,
    user: req.body.user
  };
  mensajes.push( mensaje );
  res.json({
    ok: true,
    mensaje
  });
});




// Get mensajes
router.get('/', function (req, res) {
  res.json('Obteniendo mensajes');
});




module.exports = router;