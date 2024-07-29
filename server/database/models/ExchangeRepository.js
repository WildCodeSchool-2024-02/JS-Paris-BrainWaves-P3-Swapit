const AbstractRepository = require("./AbstractRepository");

class ExchangeRepository extends AbstractRepository {
  constructor() {
    super({ table: "exchange" });
  }

  async create(exchange) {
    const [result] = await this.database.query(
        `insert into ${this.table} (comment_id, date, status, receiver_id ) values ( ?, ?, ?, ?) `,
        [
            null,
            new Date().toISOString().slice(0, 19).replace('T', ' '),
            "Proposed",
            exchange.receiver_id ,
        ]
    )
  
    return result

  }

    async filterProposition(itemId, itemTwoId, receiverId){
    const [result] = await this.database.query(
      `SELECT DISTINCT i.*, ex.*, t.* 
      FROM item as i
      JOIN transaction as t 
      ON i.item_id = t.item_id 
      JOIN exchange as ex 
      ON ex.receiver_id = ? WHERE i.item_id IN (?, ?) AND ex.exchange_id = t.exchange_id`,
      [
        receiverId,
        itemId,
        itemTwoId
      ]
      
    )
    return result
  }

}


module.exports = ExchangeRepository; 