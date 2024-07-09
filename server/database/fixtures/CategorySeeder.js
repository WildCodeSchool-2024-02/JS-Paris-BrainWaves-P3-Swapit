const AbstractSeeder = require("./AbstractSeeder");

class CategorySeeder extends AbstractSeeder {
  constructor() {
    super({ table: "category", truncate: true });
  }

  run() {
    const categories = [
      {
        category_id: 1,
        category_name: "Smartphones",
        refName: "category01",
      },
      {
        category_id: 2,
        category_name: "Ordinateurs",
        refName: "category02",
      },
      {
        category_id: 3,
        category_name: "Tablettes",
        refName: "category03",
      },
      {
        category_id: 4,
        category_name: "Son\u00A0&\u00A0Vidéos",
        refName: "category04",
      },
      {
        category_id: 5,
        category_name: "Consoles",
        refName: "category05",
      },
      {
        category_id: 6,
        category_name: "Accessoires",
        refName: "category06",
      },
      {
        category_id: 7,
        category_name: "Drônes",
        refName: "category07",
      },
      {
        category_id: 8,
        category_name: "Sécurités",
        refName: "category08",
      },
      {
        category_id: 9,
        category_name: "Composants",
        refName: "category09",
      },
      {
        category_id: 10,
        category_name: "Réseaux\u00A0et\u00A0connectivités",
        refName: "category10",
      },
      {
        category_id: 11,
        category_name: "Appareils\u00A0ménagers",
        refName: "category11",
      },
    ];

    categories.forEach((category) => {
      this.insert(category);
    });
  }
}

module.exports = CategorySeeder;
