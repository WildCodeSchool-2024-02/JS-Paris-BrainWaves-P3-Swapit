// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const items = await tables.item.readAll();

    // Respond with the items in JSON format
    res.json(items);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const item = await tables.item.read(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (item == null) {
      res.sendStatus(404);
    } else {
      res.json(item);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit = async (req,res,next) => {
  try {
    const {id} = req.params;
    const itemData = req.body;
    const [result] = await tables.item.update(itemData, id );
    if (result.affectedRows > 0) res.sendStatus(204)
      else res.sendStatus(404)
  }catch (error){
    next(error) 
  }
} 
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the item data from the request body

  try {
    // Insert the item into the 
    const itemData = req.body;
    const result= await tables.item.create(itemData);
    // const resultData = await tables.item.read(result)
    
    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json(result);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};


// The D of BREAD - Destroy (Delete) operation
const destroy = async (req, res, next) => {
  try {
    const {id} = req.params;
    const [result] = await tables.item.delete(id);
    if (result.affectedRows > 0) res.sendStatus(204)
    else res.sendStatus(404);

  } catch (e) {
    next(e);
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
