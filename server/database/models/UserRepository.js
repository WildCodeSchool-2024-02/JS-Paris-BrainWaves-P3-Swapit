const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    super({ table: "user" });
  }

  async create(user) {
    // Execute the SQL INSERT query to add a new item to the "item" table

    const [result] = await this.database.query(
      `insert into ${this.table} (pseudo, password, email, phone) values (?, ?, ?, ?)`,
      [user.pseudo, user.password, user.email, user.phone]
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  async update(user, id) {
    return this.database.query(`UPDATE ${this.table}  SET ? WHERE ${this.table}_id = ?`, [user, id]);
  }

  async delete(id) {
    return this.database.query(`DELETE FROM ${this.table} WHERE ${this.table}_id = ?`, [id]);
  }
}

module.exports = UserRepository;
