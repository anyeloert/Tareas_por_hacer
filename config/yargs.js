const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado= {
    default: true,
    alias: 'c'
}

const argv = require('yargs')
                .command('crear', 'Crear un elemento por hacer', {
                    descripcion 
                })
                .command('borrar', 'Borra un elemento por hacer', {
                    descripcion 
                })
                .command('actualizar', 'Actualiza el estado completado de una tarea', {
                    descripcion,
                    completado
                })
                .help()
                .argv



module.exports = {
    argv
}