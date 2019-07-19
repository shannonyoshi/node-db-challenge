const db = require("../data/db-config");

module.exports = {
  add
};

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
  return db("actions").insert({
    project_id: id,
    description: action.description,
    notes: action.notes,
    completed: action.completed
  })
  .then(ids => {
      return findById(ids[0])
  })
}
