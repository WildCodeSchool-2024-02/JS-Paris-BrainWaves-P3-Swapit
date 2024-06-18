const AbstractRepository = require("./AbstractRepository");

class ItemRepository extends AbstractRepository {
  constructor() {
    super({ table: "item" });
  }

  async create(item) {
    const [result] = await this.database.query(
      `insert into ${this.table} (name, description, conditions, date_added) values (?, ?, ?, ?)`,
      [item.name, item.description, item.conditions, item.date_added]
    );

    return result.insertId;
  }

  async update(item, id) {
    return this.database.query(
      `UPDATE ${this.table}  SET ? WHERE ${this.table}_id = ?`,
      [item, id]
    );
  }

  async delete(id) {
    return this.database.query(
      `DELETE FROM ${this.table} WHERE ${this.table}_id = ?`,
      [id]
    );
  }
}

module.exports = ItemRepository;
