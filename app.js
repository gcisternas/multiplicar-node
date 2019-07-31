const argv = require('./config/yargs').argv;
var colors = require('colors');

const { crearArchivo } = require('./multiplicar/multiplicar');
const { listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(data => console.log(`Lista creada:  ${data.green }`))
            .catch(err => console.log(err));
        console.log('Listar');
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ` + colors.green(`${ archivo }`)))
            .catch(err => console.log(err));

        console.log('Crear');
        break;
    default:

        console.log('Comando no reconocido');
}