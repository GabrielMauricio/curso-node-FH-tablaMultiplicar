"use strict";
const argv = require("yargs")
    .options({
        "b": {
            alias: "base",
            type: "number",
            demandOption: true,
            describe: "El número del que quieres que sea la tabla"
        }, 
        "l": {
            alias: "listar",
            type: "boolean",
            default: false,
            describe: "Indica si deseas que la tabla se imprima por consola o no"
        },
        "h": {
            alias: "hasta",
            type: "number",
            default: 10,
            describe: "Hasta qué número quieres que se multiplique la base en la tabla",
        }
    })
    .check((argv, options) => {
        if(isNaN(argv.base)) {
            throw new Error("ERROR: La base debe ser un número.");
        }
        return true;
    })
    .argv;

module.exports = argv;