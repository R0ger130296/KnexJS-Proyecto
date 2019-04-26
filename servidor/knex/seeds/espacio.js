
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('espacio').del()
    .then(function () {
      // Inserts seed entries
      return knex('espacio').insert([
        {id_espacio: 1, nombre: 'Laboratorio 1'}
      ]);
    });
};
