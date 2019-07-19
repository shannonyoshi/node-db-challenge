const db = require("../data/db-config");

module.exports = {
  add,
  findWithContexts
};

function findWithContexts(id) {
  const action = db("actions")
    .where({ id })
    .first()
    .select("actions.*");
  if (action.completed === 0) {
    action.completed = "false";
  } else {
    action.completed = "true";
  }
  const contexts = db("action-context-relational as AC")
    .where({ action_id: id })
    .innerJoin("contexts", "AC.context_id", "contexts.id");

  }

function findById(id) {
  return db("actions")
    .where({ id })
    .first()
    .then(action => {
      if (action) {
        return action;
      } else {
        return null;
      }
    });
}

function add(action, id) {
  return db("actions")
    .insert({
      project_id: id,
      description: action.description,
      notes: action.notes,
      completed: action.completed
    })
    .then(ids => {
      return findById(ids[0]);
    });
}
