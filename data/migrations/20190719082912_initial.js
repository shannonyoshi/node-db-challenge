exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();
      tbl
        .string("project_name", 128)
        .notNullable()
        .unique();
      tbl.string("description");
      tbl.boolean("completed");
    })
    .createTable("actions", tbl => {
      tbl.increments();
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl
        .string("description")
        .notNullable()
        .unique();
      tbl.string("notes");
      tbl.boolean("completed");
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("actions").dropTableIfExists("projects");
};
