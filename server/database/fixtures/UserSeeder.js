const argon2 = require("argon2");
const AbstractSeeder = require("./AbstractSeeder");



class UserSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "user", truncate: true });
  }


  
 static hash(password) {
  return argon2.hash(password)
  }
  // The run method - Populate the 'user' table with fake data

async run() {
    // Generate and insert fake data into the 'user' table
    // Generate fake user data
    const users = [
      {
        pseudo: "Ludo",
        password: await this.hash("salut"),
        email: "ludovic.scelles@gmail.com",
        phone: "06 12 34 56 78",
        picture: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        refName: "user1"
      },
      {
        pseudo: "Mary",
        password: await this.hash("salut"),
        email: "mary.fake.email@example.com",
        phone: "06 98 76 54 32",
        picture: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        refName: "user2"
      },
      {
        pseudo: "John",
        password: await this.hash("salut"),
        email: "john.doe@example.com",
        phone: "06 11 22 33 44",
        picture: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        refName: "user3"

      },

      {
        pseudo: "Alice",
        password: await this.hash("salut"),
        email: "alice.wonder@example.com",
        phone: "06 55 66 77 88",
        picture: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        refName: "user4"

      },

      {
        pseudo: "Bob",
        password: await this.hash("salut"),
        email: "bob.builder@example.com",
        phone: "06 44 55 66 77",
        picture: "https://images.pexels.com/photos/2340978/pexels-photo-2340978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
