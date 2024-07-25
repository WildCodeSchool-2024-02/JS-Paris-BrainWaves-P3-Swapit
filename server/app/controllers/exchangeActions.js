const tables = require("../../database/tables");


const add = async (req, res, next) => {
  
    try {
      const transactionData = req.body;
      const check = await tables.exchange.filterProposition(transactionData.item_id, transactionData.itemTwo_id, transactionData.receiver_id )
     if (check.length > 1 ) return res.sendStatus(403)

      const result = await tables.exchange.create(transactionData);
  
        await tables.transaction.create({item_id : transactionData.item_id, exchange_id: result.insertId})
        await tables.transaction.create({item_id : transactionData.itemTwo_id, exchange_id: result.insertId})
        
      return res.status(201).json(result)
      
      
    } catch (err) {
     return next(err);
      
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
  



  module.exports = { browse,
    add}