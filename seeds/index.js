const seedFilms = require("./films-seeds");
const seedMusic = require("./music-seeds");
const seedTv = require("./tv-seeds");
const seedWrestling = require("./wrestling-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n--- Database SYNCED ----- \n");

  await seedFilms();
  console.log("\n--- FILMS SEEDED ----- \n");

  await seedMusic();
  console.log("\n--- MUSIC SEEDED ----- \n");

  await seedTv();
  console.log("\n--- TV SEEDED ----- \n");

  await seedWrestling();
  console.log("\n--- WRESTLING SEEDED ----- \n");

  process.exit(0);
};

seedAll();
