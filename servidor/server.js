const express = require('express');
const PORT = process.env.PORT || 3001;
const knex = require('./knex/knex.js');
const app = express();

app.get('/campus', function(req, res) {
    knex.select().from('campus').then(function(campus) {
    //knex.select().from('campus').where('id_campus', 1).then(function(campus) {
      //res.send(campus.rows)
      res.send(campus)    
  })
});

app.post('/campus', function(req, res) {
  knex('campus').insert({
    id_campus: 2,
    nombre: "Instituto Benito Juarez"
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