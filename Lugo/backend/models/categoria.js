var mongoose = require('mongoose');
var esquema = new mongoose.Schema(
    {
        nombreCategoria: String,
        descripcion: String,
        color: String,
        icono: String,
        empresas: Array
    }
);

module.exports = mongoose.model('categorias', esquema);