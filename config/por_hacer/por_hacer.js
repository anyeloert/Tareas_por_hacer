const fs = require('fs')

let tareas = []

const guardar = () => {
    const tareasJson = JSON.stringify(tareas)
    return new Promise ((res, rej) => {

        fs.writeFile('./config/db/data.json', tareasJson, err => {
            if (err) rej(err)
            else res('tarea guardada')

        } )
    })
}

const leer = () => {
    try {
        tareas = require('../db/data.json')
    } catch (error) {
        tareas = []
    }
    return tareas
}

const actualizar = (descripcion, completado = true) => {    
    const tareas = leer()
    const match = tareas.findIndex(tarea => tarea.descripcion === descripcion)
    if (match >=0){
        tareas[match].completado = completado
        guardar()
        return 'se actualizó la tarea'
    }else return 'problemas para actualizar la tarea'
    
}

const borrar = (descripcion) => {
    const busqueda = leer()   
    tareas = busqueda.filter(tarea => tarea.descripcion !== descripcion);
    if (tareas.length !== busqueda.length){
        guardar()
        return 'borrado exitoso'
    }
    else return 'problemas al borrar'

}

const crear = (descripcion) => {

    tareas = leer()
    const tarea = {
        descripcion,
        completado : false
    }
    tareas.push(tarea)
    guardar()
        .then(data => console.log(data))
        .catch(err => console.log(`no se pudo guardar ${err}`))
}

module.exports = {
    crear,
    leer, 
    actualizar,
    borrar
}