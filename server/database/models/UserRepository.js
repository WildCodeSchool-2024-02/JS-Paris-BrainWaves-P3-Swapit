const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    super({ table: "user" });
  }

  async create(user) {
    const [result] = await this.database.query(
      `insert into ${this.table} (pseudo, password, email, phone) values (?, ?, ?, ?)`,
      [user.pseudo, user.password, user.email, user.phone]
    );

    return result.insertId;
  }

  async update(user, id) {
    return this.database.query(
      `UPDATE ${this.table}  SET ? WHERE ${this.table}_id = ?`,
      [user, id]
    );
  }

  async delete(id) {
    return this.database.query(
      `DELETE FROM ${this.table} WHERE ${this.table}_id = ?`,
      [id]
    );
  }

  async readItemByUser (id) {
    return this.database.query(
      `SELECT *
      FROM ${this.table} as u
      JOIN item as i ON i.user_id = u.user_id
      WHERE u.user_id =?`,
      [id]
    );
}}

module.exports = UserRepository;
