const AbstractRepository = require("./AbstractRepository");

class ItemRepository extends AbstractRepository {
  constructor() {
    super({ table: "item" });
  }

  async create(item) {
    const [result] = await this.database.query(
      `insert into ${this.table} (name, description, conditions, date_added, image_url, location, swap_request, user_id, category_id ) values (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        item.name,
        item.description,
        item.conditions,
        item.date_added,
        item.image_url,
        item.location,
        item.swap_request,
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

  async readItemApproved() {
    const result = await this.database.query(
      `SELECT u.*, i.*, c.category_name 
    FROM ${this.table} as i
    JOIN category as c
    ON i.category_id = c.category_id
    JOIN user as u
    ON i.user_id = u.user_id
    WHERE i.is_approved = 1`
    );
    return result;
  }

  async readItemUnapproved() {
    const result = await this.database.query(
      `SELECT u.*, i.*, c.category_name 
    FROM ${this.table} as i
    JOIN category as c
    ON i.category_id = c.category_id
    JOIN user as u
    ON i.user_id = u.user_id
    WHERE i.is_approved = 0`
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
    WHERE i.is_approved = 1
    ORDER BY i.date_added DESC`
    );
    return result;
  }

  async swap (id) {
    const result = await this.database.query(
      `SELECT DISTINCT i.*, ex.*, t.*, u.*
		FROM user as u 
      JOIN item as i
      ON u.user_id = i.user_id
      JOIN transaction as t 
      ON i.item_id = t.item_id 
      JOIN exchange as ex 
      ON ex.exchange_id = t.exchange_id WHERE ex.receiver_id = ? 
      AND u.user_id != ?
       `, [id, id]
    
    )
    return result;
  }

  async reception (id) {
    const result = await this.database.query(
      `SELECT DISTINCT i.*, ex.*, t.* 
      FROM ${this.table} as i
      JOIN transaction as t 
      ON i.item_id = t.item_id 
      JOIN exchange as ex 
      ON ex.receiver_id = ? WHERE i.user_id = ?
       `, [id, id]
    
    )
    return result;
  }
}

module.exports = ItemRepository;
