const AbstractSeeder = require("./AbstractSeeder");

class UserSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "user", truncate: true });
  }

  // The run method - Populate the 'user' table with fake data

  run() {
    // Generate and insert fake data into the 'user' table
    // Generate fake user data
    const users = [
      {
        pseudo: "Ludo",
        password: "sqdklfjqsklkf",
        email: "ludovic.scelles@gmail.com",
        phone: "06 12 34 56 78",
        refName: "user1"
      },
      {
        pseudo: "Mary",
        password: "fsjdkflmqfk",
        email: "mary.fake.email@example.com",
        phone: "06 98 76 54 32",
        refName: "user2"
      },
      {
        pseudo: "John",
        password: "pwd12345",
        email: "john.doe@example.com",
        phone: "06 11 22 33 44",
        refName: "user3"

      },

      {
        pseudo: "Alice",
        password: "alicepwd",
        email: "alice.wonder@example.com",
        phone: "06 55 66 77 88",
        refName: "user4"

      },

      {
        pseudo: "Bob",
        password: "bobssecret",
        email: "bob.builder@example.com",
        phone: "06 44 55 66 77",
        refName: "user5"

      },
    ];

    users.forEach((user) => {
      this.insert(user);
    });
  }
}

// Export the UserSeeder class
module.exports = UserSeeder;
