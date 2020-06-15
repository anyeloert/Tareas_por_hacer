const argv = require('./config/yargs').argv
const colors = require('colors')
const {crear, leer, actualizar, borrar} = require('./config/por_hacer/por_hacer')

const comando = argv._[0]
let status = ''

switch (comando) {
    case 'crear':
        crear(argv.descripcion)
        break;
    case 'listar':
        const tareas = leer()
        for (tarea of tareas){
            console.log('==========Por Hacer=========='.green);
            console.log(tarea.descripcion);
            console.log(`Estado: ${tarea.completado}`);
            console.log('============================='.green);
        }
        break;
    case 'actualizar':
        status = actualizar(argv.descripcion, argv.completado)
        console.log(status);
        break;
    case 'borrar':
        status = borrar(argv.descripcion)
        console.log(status);
        break;

    default:
        console.log('comando inválido');
        break;
}

