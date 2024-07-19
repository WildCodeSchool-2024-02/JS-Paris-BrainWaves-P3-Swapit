const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const items = await tables.item.readAll();

    res.json(items);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const item = await tables.item.read(req.params.id);

    if (item == null) {
      res.sendStatus(404);
    } else {
      res.json(item);
    }
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  try {
    const { id } = req.params;
    const itemData = req.body;
    const [result] = await tables.item.update(itemData, id);
    if (result.affectedRows > 0) res.sendStatus(204);
    else res.sendStatus(404);
  } catch (error) {
    next(error);
  }
};

const add = async (req, res, next) => {
  try {
    if (req.file) {
      const uploadDir = `${process.env.APP_HOST}/upload/${req.file.filename}`;
      req.body.image_url = uploadDir;
    }

    const itemData = req.body;
    const result = await tables.item.create(itemData);

    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    const { id } = req.params;
    const [result] = await tables.item.delete(id);
    if (result.affectedRows > 0) res.sendStatus(204);
    else res.sendStatus(404);
  } catch (e) {
    next(e);
  }
};
const getUserByItem = async (req, res, next) => {
  try {
    const [result] = await tables.item.readUserByItem(req.params.id);
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ message: "Item not found" });
    }
  } catch (err) {
    next(err);
  }
};

const getItemApproved = async (req, res, next) => {
  try {
    const [result] = await tables.item.readItemApproved();
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ message: "Item not found" });
    }
  } catch (err) {
    next(err);
  }
};

const getItemUnapproved = async (req, res, next) => {
  try {
    const [result] = await tables.item.readItemUnapproved();
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ message: "Item not found" });
    }
  } catch (err) {
    next(err);
  }
};

const getItemByDate = async (req, res, next) => {
  try {
    const [result] = await tables.item.readItemOrderByDate();
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
  getUserByItem,
  getItemApproved,
  getItemByDate,
  getItemUnapproved,
};
