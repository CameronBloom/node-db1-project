const db = require('../../data/db-config')

const getAll = () => {
  // select * from accounts;
  return db('accounts');
}

const getById = id => {
  // select * from accounts where id = [:id];
  return db('accounts').where('id', id).first();
}

const getByName = name => {
  // select * from accounts where id = [:id];
  return db('accounts').where('name', name).first();
}

const create = async account => {
  // insert into accounts (name, budget) values (req.body.name, req.body.budget);
  const id = await db('accounts').insert(account)
  return getById(id)
}

const updateById = async (id, account) => {
  await db('accounts').where('id', id).update(account)
  return getById(id)
}

const deleteById = id => {
  // delete from accounts where id = [:id]
  return db('accounts').where('id', id).del()
}

module.exports = {
  getAll,
  getById,
  getByName,
  create,
  updateById,
  deleteById,
}
