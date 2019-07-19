exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          project_name: "Do Something",
          description: "Blah Blah Blah",
          completed: false
        },
        {
          project_name: "Do Something1",
          description: "Blah Blah Blah",
          completed: false
        },
        {
          project_name: "Do Something2",
          description: "Blah Blah Blah",
          completed: false
        }
      ]);
    });
};
