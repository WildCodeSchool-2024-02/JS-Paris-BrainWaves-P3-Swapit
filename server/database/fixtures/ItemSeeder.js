const AbstractSeeder = require("./AbstractSeeder");

// Import seeders that must be executed before this one
// Follow your foreign keys to find the right order ;)
const UserSeeder = require("./UserSeeder");

class ItemSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "item", truncate: true, dependencies: [UserSeeder] });
  }

  // The run method - Populate the 'item' table with fake data

  run() {
    // Generate and insert fake data into the 'item' table

    // Generate fake item data
    const items = [
      {
        name: "iphone 12",
        description:
          "iPhone 12 à échanger Écran Super Retina XDR de 6,1 pouces, puce A14 Bionic, double caméra avec mode Nuit, compatible 5G. Très bon état avec accessoires inclus.",
        conditions: "Très bon état",
        date_added: "2024-04-28",
        image_url:
          "https://images.pexels.com/photos/6608247/pexels-photo-6608247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        location: "Saint-Cyr",
        user_id: this.getRef("user1").insertId,
        category_id: this.getRef("category01").insertId,
      },
      {
        name: "iphone 11",
        description:
          "iPhone 11 à échanger Écran Super Retina XDR de 5,8 pouces, puce A14 Bionic, double caméra avec mode Nuit, compatible 5G. Très bon état avec accessoires inclus.",
        conditions: "Très bon état",
        date_added: "2024-05-22",
        image_url:
          "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        location: "Paris",
        user_id: this.getRef("user2").insertId,
        category_id: this.getRef("category01").insertId,
      },

      {
        name: "Samsung Galaxy S21",
        description:
          "Samsung Galaxy S21 à échanger Écran Dynamic AMOLED de 6,2 pouces, processeur Exynos 2100, triple caméra avec mode Nuit, compatible 5G. Comme neuf avec accessoires inclus.",
        conditions: "Comme neuf",
        date_added: "2024-06-15",
        image_url:
          "https://images.pexels.com/photos/17944743/pexels-photo-17944743/free-photo-of-homme-main-smartphone-connexion.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2https://images.pexels.com/photos/4042802/pexels-photo-4042802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        location: "Marseille",
        user_id: this.getRef("user3").insertId,
        category_id: this.getRef("category01").insertId,
      },

      {
        name: "Google Pixel 6",
        description:
          "Google Pixel 6 à échanger Écran OLED de 6,4 pouces, processeur Google Tensor, double caméra avec Night Sight, compatible 5G. Très bon état avec accessoires inclus.",
        conditions: "Très bon état",
        date_added: "2024-06-18",
        image_url:
          "https://images.pexels.com/photos/163065/mobile-phone-android-apps-phone-163065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        location: "Caen",
        user_id: this.getRef("user4").insertId,
        category_id: this.getRef("category01").insertId,
      },

      {
        name: "OnePlus 9 Pro",
        description:
          "OnePlus 9 Pro à échanger Écran Fluid AMOLED de 6,7 pouces, processeur Snapdragon 888, quadruple caméra avec mode Nuit, compatible 5G. Bon état avec accessoires inclus.",
        conditions: "Bon état",
        date_added: "2024-06-20",
        image_url:
          "https://images.pexels.com/photos/9403824/pexels-photo-9403824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        location: "Lille",
        user_id: this.getRef("user5").insertId,
        category_id: this.getRef("category01").insertId,
      },

      {
        name: "MacBook Pro 16 pouces",
        description:
          "MacBook Pro 16 pouces à échanger Écran Retina de 16 pouces, processeur Apple M1 Pro, 16 Go de RAM, 512 Go de stockage SSD, clavier Magic Keyboard. Très bon état avec chargeur et accessoires inclus.",
        conditions: "Très bon état",
        date_added: "2024-06-25",
        image_url:
          "https://images.pexels.com/photos/3987020/pexels-photo-3987020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        location: "Deauville",
        user_id: this.getRef("user1").insertId,
        category_id: this.getRef("category02").insertId,
      },

      {
        name: "Dell XPS 13",
        description:
          "Dell XPS 13 à échanger Écran InfinityEdge de 13,4 pouces, processeur Intel Core i7 de 11e génération, 16 Go de RAM, 1 To de SSD. Comme neuf avec chargeur et accessoires inclus.",
        conditions: "Comme neuf",
        date_added: "2024-06-22",
        image_url:
          "https://images.pexels.com/photos/3987066/pexels-photo-3987066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        location: "Lyon",
        user_id: this.getRef("user2").insertId,
        category_id: this.getRef("category02").insertId,
      },

      {
        name: "HP Spectre x360",
        description:
          "HP Spectre x360 à échanger Écran tactile OLED de 15,6 pouces, processeur Intel Core i7 de 10e génération, 16 Go de RAM, 512 Go de SSD, convertible 2-en-1. Très bon état avec stylet et chargeur inclus.",
        conditions: "Très bon état",
        date_added: "2024-06-23",
        image_url:
          "https://images.pexels.com/photos/5243611/pexels-photo-5243611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        location: "Bordeaux",
        user_id: this.getRef("user3").insertId,
        category_id: this.getRef("category02").insertId,
      },
    ];

    // Insert the fakeItem data into the 'item' table
    items.forEach((item) => {
      this.insert(item);
    }); // insert into item(title, user_id) values (?, ?)
  }
}

// Export the ItemSeeder class
module.exports = ItemSeeder;
