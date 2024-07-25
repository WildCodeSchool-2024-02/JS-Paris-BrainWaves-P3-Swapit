const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const transaction = await tables.transaction.readAll();

    res.json(transaction);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
    try {
      const userData = req.body;
      const result = await tables.transaction.create(userData);
  
      res.status(201).json(result);
    } catch (err) {
      next(err);
    }
  };

  module.exports = {browse,
    add}