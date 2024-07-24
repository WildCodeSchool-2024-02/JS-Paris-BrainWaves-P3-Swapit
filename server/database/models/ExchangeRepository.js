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

  // async swap() {
  //   const [result] = await this.database.query(
  //     `SELECT ex.*, t.* from ${this.table} as ex
  //     JOIN transaction as t
  //     ON t.exchange_id = ex.exchange_id
  //     JOIN ex.`
      
  //   )

  //   return result
  // }
}
// definir status 

module.exports = ExchangeRepository; 