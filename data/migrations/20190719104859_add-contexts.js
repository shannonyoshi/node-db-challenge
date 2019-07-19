
exports.up = function(knex) {
  return knex.schema
  .createTable("contexts", tbl => {
      tbl.increments()
    tbl.string("context").notNullable().unique()
    })
    .createTable("action-context-relational", tbl=> {
        tbl.increments()
        tbl.integer("action_id").unsigned().notNullable().references("id").inTable("actions").onDelete("RESTRICT").onUpdate("CASCADE")
        tbl.integer("context_id").unsigned().notNullable().references("id").inTable("contexts").onDelete("RESTRICT").onUpdate("CASCADE")
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("action-context-relational").dropTableIfExists("contexts")
};
