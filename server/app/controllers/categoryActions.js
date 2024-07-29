const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const category = await tables.category.readAll();

    res.json(category);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const category = await tables.category.read(req.params.id);

    if (category == null) {
      res.sendStatus(404);
    } else {
      res.json(category);
    }
  } catch (err) {
    next(err);
  }
};

const readItemByCategory = async (req, res, next) => {
  try {
    const [category] = await tables.category.readItemByCategory(req.params.id);
    if (category) {
      res.json(category);
    } else {
      res.sendStatus(404).json({ message: "Category not found" });
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

module.exports = {
  browse,
  read,
  readItemByCategory,
};
