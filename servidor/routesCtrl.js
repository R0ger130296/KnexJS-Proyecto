const knex = require('./knex/knex')

module.exports = {
    traerTodo,
    añadir
};

function traerTodo(req, res) {
    knex.select()
        .from('campus')
        .then( campus => res.send(campus));
}

function añadir(req, res) {    
    knex('campus').insert({
        nombre: req.body.nombre,
        calle_pri: req.body.calle_pri,
        pais: req.body.pais,
        telefono: req.body.telefono
    })
    .then(() => {
        knex.select()
            .from('campus')
            .then(campus => res.send(campus));
    })  
};
