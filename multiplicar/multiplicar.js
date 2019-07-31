// requireds
const fs = require('fs');
var colors = require('colors');


let listarTabla = (base, limite) => {


    console.log('================================'.green);
    console.log(` Tabla del ${base}  `.green);
    console.log('================================'.green);
    console.log('================================'.green);

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor de la base ${ base } no es númerico`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor del limite ${ limite } no es númerico`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } =   ${ i * base } \n`;
        }
        if (data != '') {
            resolve(`${data}`);
        }
    });
}


let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor de la base ${ base } no es númerico`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } =   ${ i*base } \n`;
        }
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`El archivo tabla-${base}.txt ha sido creado`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}