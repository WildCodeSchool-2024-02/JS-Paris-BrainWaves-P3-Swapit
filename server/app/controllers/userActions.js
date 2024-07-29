const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const users = await tables.user.readAll();

    res.json(users);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const user = await tables.user.read(req.params.id);

    if (user == null) {
      res.sendStatus(404);
    } else {
      res.json(user);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  try {
    const userData = req.body;
    const result = await tables.user.create(userData);

    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userData = req.body;
    const [result] = await tables.user.update(userData, id);
    if (result.affectedRows > 0) res.sendStatus(204);
    else res.sendStatus(404);
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    const { id } = req.params;
    const [result] = await tables.user.delete(id);
    if (result.affectedRows > 0) res.sendStatus(204);
    else res.sendStatus(404);
  } catch (e) {
    next(e);
  }
};

const getItemByUser = async (req, res, next) => {
  try {
    const [result] = await tables.user.readItemByUser(req.params.id);
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ message: "Item not found" });
    }
  } catch (err) {
    next(err);
  }
};


module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
  getItemByUser
};
