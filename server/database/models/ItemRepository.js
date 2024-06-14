const AbstractRepository = require("./AbstractRepository");

class ItemRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "item" });
  }

  // The C of CRUD - Create operation

  async create(item) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    
    const [result] = await this.database.query(
      `insert into ${this.table} (name, description, conditions, date_added) values (?, ?, ?, ?)`,
      [item.name, item.description, item.conditions, item.date_added]
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item

  // async update(item, id) {}

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an item by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = ItemRepository;
