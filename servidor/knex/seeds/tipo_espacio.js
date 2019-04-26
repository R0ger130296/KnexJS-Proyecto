
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tipo_espacio').del()
    .then(function () {
      // Inserts seed entries
      return knex('tipo_espacio').insert([
        {id_tipo_espacio: 1, nombre: 'rowValue1'}
      ]);
    });
};
