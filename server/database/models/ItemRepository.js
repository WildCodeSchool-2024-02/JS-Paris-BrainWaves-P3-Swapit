const AbstractRepository = require("./AbstractRepository");

class ItemRepository extends AbstractRepository {
  constructor() {
    super({ table: "item" });
  }

  async create(item) {
    const [result] = await this.database.query(
      `insert into ${this.table} (name, description, conditions, date_added, image_url, location, user_id, category_id ) values (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        item.name,
        item.description,
        item.conditions,
        item.date_added,
        item.image_url,
        item.location,
        item.user_id,
        item.category_id,
      ]
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

  async readItemWithUser() {
    const result = await this.database.query(
      `SELECT u.*, i.*, c.category_name 
    FROM ${this.table} as i
    JOIN category as c
    ON i.category_id = c.category_id
    JOIN user as u
    ON i.user_id = u.user_id`
    );
    return result;
  }

  async readUserByItem(id) {
    const result = await this.database.query(
      `SELECT u.*, i.*, c.category_name
      FROM ${this.table} as i
      JOIN category as c
      ON i.category_id = c.category_id
      JOIN user as u
      ON i.user_id = u.user_id
      WHERE i.item_id =?`,
      [id]
    );
    return result;
  }

  async readItemOrderByDate() {
    const result = await this.database.query(
      `SELECT u.*, i.*, c.category_name 
    FROM ${this.table} as i
    JOIN category as c
    ON i.category_id = c.category_id
    JOIN user as u
    ON i.user_id = u.user_id
    ORDER BY i.date_added DESC`
    
    );
    return result;
  }
}

module.exports = ItemRepository;
