// Import the repository modules responsible for handling data operations on the tables
const ItemRepository = require("./models/ItemRepository");

const UserRepository = require("./models/UserRepository");

const CategoryRepository = require("./models/CategoryRepository");

const ExchangeRepository = require("./models/ExchangeRepository");

const TransactionRepository = require("./models/TransactionRepository");

const tables = {};

tables.item = new ItemRepository();

tables.user = new UserRepository();

tables.category = new CategoryRepository();

tables.exchange = new ExchangeRepository();

tables.transaction = new TransactionRepository();

module.exports = new Proxy(tables, {
  get(obj, prop) {
    if (prop in obj) return obj[prop];

    throw new ReferenceError(
      `tables.${prop} is not defined. Did you register it in ${__filename}?`
    );
  },
});
