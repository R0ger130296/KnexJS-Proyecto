const express = require('express');
const bodyParser = require('body-Parser');
const PORT = process.env.PORT || 3001;
const knex = require('./knex/knex.js');

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/campus', function(req, res) {
    knex.select().from('campus').then(function(campus) {
    //knex.select().from('campus').where('id_campus', 1).then(function(campus) {
      //res.send(campus.rows)
      res.send(campus)    
  })
});

app.post('/campus', function(req, res) {
  knex('campus').insert({
    nombre: req.body.nombre,
    calle_pri: req.body.calle_pri 
  })
  .then(function() {
    knex.select().from('campus')
      .then(function(campus) {
        res.send(campus) 
      })
  })  
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});