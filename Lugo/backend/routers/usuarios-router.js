var express = require('express');
var router = express.Router();
var usuario = require('../models/usuario');
var mongoose = require('mongoose');
// Listar usuarios
router.get('/', function(req, res) {
    usuario.find({}, { _id: true, nombre: true, apellido: true })
        .then(result => {
            res.send(result);
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        });
    /*
    res.send('Obtener usuarios');
    res.end();*/
});
// ◦ Ver Pedidos
router.get('/:idUsuario/ordenes', function(req, res) {
    usuario.find({ _id: req.params.idUsuario }, { _id: true, nombre: true, "ordenes": true })
        .then(result => {
            res.send(result[0]);
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        })
        /*
        res.send(`Obtener ordenes del usuario  ${req.params.idUsuario}`);
        res.end();*/
});
// Nuevo pedido
router.post('/:idUsuario/orden', function(req, res) {
    usuario.update({
            _id: mongoose.Types.ObjectId(req.params.idUsuario)
        }, {
            $push: {
                ordenes: { cantidad: req.body.cantidad }
            }
        }).then(result => {
            res.send(result);
            res.end();
        }).catch(error => {
            res.send(error);
            res.end();
        })
        /*
        res.send(`Guardar un producto en la orden con id ${req.params.idOrden} del usuario con id ${req.params.idUsuario}`);
        res.end();*/
});

/*
Usuarios 
◦ 
*/




module.exports = router;