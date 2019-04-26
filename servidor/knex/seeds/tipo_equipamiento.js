
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tipo_equipamiento').del()
    .then(function () {
      // Inserts seed entries
      return knex('tipo_equipamiento').insert([
        {id_tipo_equipamiento: 1, descripcion: 'rowValue1'}
      ]);
    });
};
