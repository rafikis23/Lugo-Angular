var express = require('express');
var router = express.Router();
var categoria = require('../models/categoria');

// Visualizar categorias
router.get('/', function(req, res) {
    categoria.find({}, { _id: true, nombreCategoria: true, color: true, icono: true, "empresas._id": true })
        .then(result => {
            res.send(result);
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        });
    /*    
    res.send('Obtener categorias');
    res.end();*/
});
// Ver detalles de las categorías
router.get('/:idCategoria/empresas', function(req, res) {
    categoria.find({ _id: req.params.idCategoria }, { nombreCategoria: true, "empresas": true })
        .then(result => {
            res.send(result[0]);
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        });
    /*
    res.send(`Obtener empresas de la categoria ${req.params.idCategoria}`);
    res.end();*/
});

/*Extra: Nueva categoría*/
/*
router.post('/categoria', function(req, res) {
    const categoria = new Categoria();

    let categoria = {
        nombreCategoria: req.body.nombreCategoria,
        descripcion: req.body.descripcion,
        color: req.body.color,
        icono: req.body.icono,
        empresas: []
    }

    categoria.push(categoria);

    
        res.send('Se guardara una nueva categoria');
        res.end();
});
*/
/*
router.post('/categoria', function(req, res) {
    insertCategoria(req, res);
})

function insertCategoria(req, res) {
    var categoria = new categoria(
        categoria.nombreCategoria = req.body.nombreCategoria,
        categoria.descripcion = req.body.descripcion,
        categoria.color = req.body.color,
        categoria.icono = req.body.icono,
        categoria.empresas = []);
    categoria.save((error, doc) => {
        if (error) return handleError(error);
    });
}

*/
/*
Categorias
◦ Visualizar categorías
◦ 
◦ 

*/


module.exports = router;