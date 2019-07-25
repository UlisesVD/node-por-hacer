const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de las tareas'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crear una tarea por hacer',{
        descripcion
    })
    .command('actualizar', 'Actualiza una tarea marcandola como realizada',{
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea guardada',{
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}