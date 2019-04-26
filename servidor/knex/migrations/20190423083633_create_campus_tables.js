
exports.up = function(knex, Promise) {
    return knex.schema.createTable('campus', function(table) {
        table.increments('id_campus');
        table.string('nombre');
        table.string('pais');
        table.string('provincia');
        table.string('canton');
        table.string('parroquia');
        table.string('calle_pri');
        table.string('calle_sec');
        table.string('numeracion');
        table.string('telefono');
        table.string('longitud');
        table.string('latitud');
        table.string('administrador');
    })
    .createTable('tipo_espacio', function(table) {
        table.increments('id_tipo_espacio');
        table.string('nombre');
    })
    .createTable('espacio', function(table) {
        table.increments('id_espacio');
        table.string('nombre');
        table.string('capacidad');
        table.string('codigo');
        table.integer('id_tipo_espacio').references('id_tipo_espacio').inTable('tipo_espacio');
    })
    .createTable('tipo_equipamiento', function(table) {
        table.increments('id_tipo_equipamiento');
        table.string('descripcion'); 
    })
    .createTable('equipamiento', function(table) {
        table.increments('id_equipamiento');
        table.string('codigo');
        table.string('descripcion');
        table.string('marca');
        table.string('observacion');
        table.string('estado');
        table.timestamp('fecha').defaultTo(knex.fn.now());
        table.integer('id_tipo_equipamiento').references('id_tipo_equipamiento').inTable('tipo_equipamiento');
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('campus')
                    .dropTable('tipo_espacio')
                    .dropTable('espacio')
                    .dropTable('tipo_equipamiento')
                    .dropTable('equipamiento');
};