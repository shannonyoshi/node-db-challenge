exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("actions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("actions").insert([
        {
          project_id: 1,
          description: "This is a task",
          notes: "These are some notes",
          completed: false
        },
        {
          project_id: 2,
          description: "This is a task1",
          notes: "These are some notes",
          completed: false
        },
        {
          project_id: 3,
          description: "This is a task2",
          notes: "These are some notes",
          completed: false
        },
        {
          project_id: 1,
          description: "This is a task3",
          notes: "These are some notes",
          completed: false
        },
        {
          project_id: 2,
          description: "This is a task4",
          notes: "These are some notes",
          completed: false
        },
        {
          project_id: 3,
          description: "This is a task5",
          notes: "These are some notes",
          completed: false
        },
        {
          project_id: 1,
          description: "This is a task6",
          notes: "These are some notes",
          completed: false
        },
        {
          project_id: 2,
          description: "This is a task7",
          notes: "These are some notes",
          completed: false
        },
        {
          project_id: 3,
          description: "This is a task8",
          notes: "These are some notes",
          completed: false
        }
      ]);
    });
};
