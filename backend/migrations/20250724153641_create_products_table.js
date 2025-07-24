exports.up = function(knex) {
  return knex.schema.createTable('products', table => {
    table.uuid('id').primary();
    table.string('name').notNullable();
    table.integer('price').notNullable();
    table.text('description');
    table.string('image_url');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('products');
};
