const fs = require('fs');
const colors = require('colors');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw err;
        return "Tarea Guardada";
    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data');
    } catch (error) {
        listadoPorHacer = [];
    }
}


const getListado = () => {
    cargarDB();
    let msj = "";
    for (const tarea of listadoPorHacer) {
        msj += "==========Por hacer================\n".green;
        msj += `${tarea.descripcion}\n`;
        msj += `Estado: ${tarea.completado}\n`;
        msj += "===================================\n".green;
    }
    return msj;
}


const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();

    return porHacer;
}

const actualizar = (descripcion, completado=true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }else{
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer.splice(index,1);
        guardarDB();
        return true;
    } else {
        return false;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}