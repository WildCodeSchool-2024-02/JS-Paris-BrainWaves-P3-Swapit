
const database = require("../client");

class AbstractRepository {
  constructor({ table }) {
    if (this.constructor === AbstractRepository) {
      throw new TypeError(
        "Abstract class 'AbstractRepository' cannot be instantiated directly"
      );
    }

    this.table = table;

    this.database = database;
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where ${this.table}_id = ?`,
      [id]
    );

    return rows[0];
  }
}

// Ready to export
module.exports = AbstractRepository;
