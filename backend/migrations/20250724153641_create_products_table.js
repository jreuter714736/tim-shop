exports.up = function(knex) {
  return knex.schema.createTable('products', table => {
    table.uuid('id').primary();
    table.string('name').notNullable();
    table.decimal('price', 10, 2).notNullable();
    table.text('description');
    table.string('image_url');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('products');
};
