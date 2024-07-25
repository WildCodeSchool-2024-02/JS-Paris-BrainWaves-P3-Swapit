const AbstractRepository = require("./AbstractRepository");

class TransactionRepository extends AbstractRepository {
  constructor() {
    super({ table: "transaction" });
  }

 async create(transaction) {
    const [result] = await this.database.query(
        `insert into ${this.table} ( item_id, exchange_id) values (?, ?) `,
        [
            transaction.item_id,
            transaction.exchange_id,
        ]
    )
    return result
 }
}

module.exports = TransactionRepository;
