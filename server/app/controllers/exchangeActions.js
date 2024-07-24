const tables = require("../../database/tables");

const add = async (req, res, next) => {
  
    try {
      
      const transactionData = req.body;
      const result = await tables.exchange.create(transactionData);
      // await tables.exchange.create({receiver_id : transactionData.receiver_id})
        await tables.transaction.create({item_id : transactionData.item_id, exchange_id: result.insertId})
        await tables.transaction.create({item_id : transactionData.itemTwo_id, exchange_id: result.insertId})
      res.status(201).json(result);
    } catch (err) {
      next(err);
      
    }
  };
 

  const browse = async (req, res, next) => {
    try {
      const exchange = await tables.exchange.readAll();
  
      res.json(exchange);
    } catch (err) {
      next(err);
    }
  };
  

  // const swapProposition = async (req,res, next) => {
  //   try {

  //   }
  // }

  module.exports = { browse,
    add}