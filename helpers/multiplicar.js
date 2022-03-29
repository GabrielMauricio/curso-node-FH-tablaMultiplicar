"use strict";
const fs = require("fs");
const colors = require("colors");

const crearArchivo = (num, hasta, listar) => {
    return new Promise((resolve, reject) => {
        let texto = ``;
        texto += `·······························\n`;
        texto += `          Tabla del ${num}\n`;
        texto += `·······························\n`;
        for(let i = 1; i <= hasta; i++) {
            if(i === hasta) {
                texto += `${num} x ${i} = ${num * i}`;
            }else {
                texto += `${num} x ${i} = ${num * i}\n`;
            }
        }
        if(listar) console.log(colors.brightGreen(texto));
        try {
            fs.writeFileSync(`./salida/tabla-del-${num}.txt`, texto);
            resolve(`tabla-del-${num}.txt`);
        }catch(err) {
            reject(err);
        }
    });
};


module.exports = {crearArchivo};