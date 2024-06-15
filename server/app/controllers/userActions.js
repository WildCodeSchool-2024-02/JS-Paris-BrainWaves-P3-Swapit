const tables = require("../../database/tables");

const browse = async (req, res, next) => {
    try {
      // Fetch all items from the database
      const users= await tables.user.readAll();
  
      // Respond with the items in JSON format
      res.json(users);
    } catch (err) {
      // Pass any errors to the error-handling middleware
      next(err);
    }
  };

  const read = async (req, res, next) => {
    try {
      // Fetch a specific item from the database based on the provided ID
      const user = await tables.user.read(req.params.id);
  
      // If the item is not found, respond with HTTP 404 (Not Found)
      // Otherwise, respond with the item in JSON format
      if (user == null) {
        res.sendStatus(404);
      } else {
        res.json(user);
      }
    } catch (err) {
      // Pass any errors to the error-handling middleware
      next(err);
    }
  };

  const add = async (req, res, next) => {
    // Extract the item data from the request body
  
    try {
      // Insert the item into the 
      const userData = req.body;
      const result= await tables.user.create(userData);
      // const resultData = await tables.item.read(result)
      
      // Respond with HTTP 201 (Created) and the ID of the newly inserted item
      res.status(201).json(result);
    } catch (err) {
      // Pass any errors to the error-handling middleware
      next(err);
    }
  };

  const edit = async (req,res,next) => {
    try {
      const {id} = req.params;
      const userData = req.body;
      const [result] = await tables.user.update(userData, id );
      if (result.affectedRows > 0) res.sendStatus(204)
        else res.sendStatus(404)
    }catch (error){
      next(error) 
    }
  } ;

  const destroy = async (req, res, next) => {
    try {
      const {id} = req.params;
      const [result] = await tables.user.delete(id);
      if (result.affectedRows > 0) res.sendStatus(204)
      else res.sendStatus(404);
  
    } catch (e) {
      next(e);
    }
  };
  module.exports = {
    browse,
    read,
    edit,
    add,
    destroy,
  };
  