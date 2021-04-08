var mongoose = require('mongoose');
var esquema = new mongoose.Schema(
    {
        nombre: String,
        apellido: String,
        ordenes: Array
    }
);

module.exports = mongoose.model('usuarios', esquema);