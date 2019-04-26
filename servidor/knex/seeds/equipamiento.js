
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('equipamiento').del()
    .then(function () {
      // Inserts seed entries
      return knex('equipamiento').insert([
        {id_equipamiento: 1, codigo: 'rowValue1'}
      ]);
    });
};
