
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('campus').del()
    .then(function () {
      // Inserts seed entries
      return knex('campus').insert([
        {id_campus: 1, nombre: 'Instituto Tecnológico de Patrimonio y Turismo Yavirac'}
      ]);
    });
};
