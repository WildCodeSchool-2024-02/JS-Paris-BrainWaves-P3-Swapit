const AbstractRepository = require("./AbstractRepository");

class CategoryRepository extends AbstractRepository {
  constructor() {
    super({ table: "category" });
  }

  async readItemByCategory(id) {
    const result = await this.database.query(
      `SELECT ${this.table}.category_name, item.*, user.*
      FROM ${this.table}
      JOIN item ON ${this.table}.category_id = item.category_id
      JOIN user ON item.user_id = user.user_id
      WHERE ${this.table}.category_id = ?`,
      [id]
    );
    return result;
  }
}

module.exports = CategoryRepository;
