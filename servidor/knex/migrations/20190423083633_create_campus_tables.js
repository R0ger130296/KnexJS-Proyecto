exports.up = function(knex, Promise) {
    return Promise.all([
    knex.schema.createTable('campus', function(table) {
        table.increments('id_campus').primary();
        table.string('nombre');
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
        table.string('pais');
    }),
    knex.schema.createTable('tipo_espacio', function(table) {
        table.increments('id_tipo_espacio').primary();
        table.string('nombre');
    }),
    knex.schema.createTable('espacio', function(table) {
        table.increments('id_espacio').primary();
        table.string('nombre');
        table.string('capacidad');
        table.string('codigo');
        table.integer('id_tipo_espacio').references('id_tipo_espacio').inTable('tipo_espacio');
    }),
    knex.schema.createTable('tipo_equipamiento', function(table) {
        table.increments('id_tipo_equipamiento').primary();
        table.string('descripcion'); 
    }),
    knex.schema.createTable('equipamiento', function(table) {
        table.increments('id_equipamiento').primary();
        table.string('codigo');
        table.string('descripcion');
        table.string('marca');
        table.string('observacion');
        table.string('estado');
        table.timestamp('fecha').defaultTo(knex.fn.now());
        table.integer('id_tipo_equipamiento').references('id_tipo_equipamiento').inTable('tipo_equipamiento');
    })
    ])
  };

  exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('campus'),
        knex.schema.dropTable('tipo_espacio'),
        knex.schema.dropTable('espacio'),
        knex.schema.dropTable('tipo_equipamiento'),
        knex.schema.dropTable('equipamiento')
    ]);
  };