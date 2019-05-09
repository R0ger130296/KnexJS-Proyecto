const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 3001;
const knex = require('./knex/knex.js');

const routesCtrl = require('./routesCtrl');

const app = express();

app.use(express.static('cliente'));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// RUTAS
app.get('/campus', routesCtrl.traerTodo)
app.post('/campus', routesCtrl.añadir)

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});