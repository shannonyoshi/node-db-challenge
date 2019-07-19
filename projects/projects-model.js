const db = require("../data/db-config");

//post /getbyID

module.exports = {
  add,
  findById
};

async function findById(id) {
  const project = await db("projects")
    .where({ "projects.id": id })
    .select("projects.*")
    .first();
  if (project) {
    const actions = await db("projects")
      .where({ "projects.id": id })
      .join("actions", "actions.project_id", "projects.id")
      .select(
        "actions.description",
        "actions.notes",
        "actions.completed",
        "actions.project_id"
      );

    const result = { ...project, actions };
    return result;
  } else {
    return null;
  }
}

function add(project) {
  return db("projects")
    .insert(project)
    .then(ids => {
      return ids[0];
    });
}
