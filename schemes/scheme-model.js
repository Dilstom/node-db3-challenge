const db = require('../data/db-config');

module.exports = {
 find,
 findById,
 //  findSteps,
 add,
 //  addStep,
 update,
 remove,
};

function find() {
 return db('schemes');
}

function findById(id) {
 return db('schemes')
  .where({ id })
  .first();
}

async function add(info) {
 //  return db('schemes').insert(info);  // returns an array with id
 const [id] = await db('schemes').insert(info);
 // [id] = [6];
 //  console.log(id);
 return findById(id); // id = 6
}

async function update(id, newInfo) {
 await db('schemes')
  .update(newInfo)
  .where({ id });
 return findById(id);
}

function remove(id) {
 return db('schemes')
  .where({ id }) // .where ({ id: id})
  .del();
}
