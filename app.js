"use strict";
const {crearArchivo} = require("./helpers/multiplicar");
const colors = require("colors");
const argv = require("./config/yargs");



crearArchivo(argv.base, argv.hasta, argv.listar)
.then(nombreArchivo => {
    console.log(colors.brightCyan(`Archivo creado: ${nombreArchivo}`));
})
.catch(err => {
    console.log(colors.brightRed(`ERROR: ${err.message}`));
    console.log(colors.brightRed(`Code Error: ${err.code}`));
});

