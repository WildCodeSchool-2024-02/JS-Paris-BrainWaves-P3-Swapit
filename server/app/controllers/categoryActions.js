const tables = require("../../database/tables");

const browse = async (req, res, next) => {
    try {
      // Fetch all items from the database
      const category= await tables.category.readAll();
  
      // Respond with the items in JSON format
      res.json(category);
    } catch (err) {
      // Pass any errors to the error-handling middleware
      next(err);
    }
  };

  const read = async (req, res, next) => {
    try {
      // Fetch a specific item from the database based on the provided ID
      const category = await tables.category.read(req.params.id);
  
      // If the item is not found, respond with HTTP 404 (Not Found)
      // Otherwise, respond with the item in JSON format
      if (category == null) {
        res.sendStatus(404);
      } else {
        res.json(category);
      }
    } catch (err) {
      // Pass any errors to the error-handling middleware
      next(err);
    }
  };

  module.exports = {
    browse,
    read,

  };
  