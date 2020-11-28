exports.up = function(knex) {
  return knex.schema.createTable("ingredients", table=>{
      table.increments();
      table.string("ingredients", 255);
  })
  .createTable("recipes", table =>{
      table.increments();
      table.string("recipe_name",255)
  })
  .createTable("ingredients_instructions", table =>{
    table.increments();
    table.integer("ingredient_id")
        .notNullable()
        .references("id")
        .inTable("ingredient")
    table.integer("intructions_id")
        .notNullable()
        .references("id")
        .intable("instructions")
    table.string("quantity", 150)

})
    createTable("instructions", table => {
        table.increments();
        table.integer("step_number", 3).notNullable();
        table.integer("recipe_id")
            .notNullable()
            .references(id)
            .intable("recipes")
        table.string("instruction", 800).notNullable();

    })
};

exports.down = function(knex) {
  
};
