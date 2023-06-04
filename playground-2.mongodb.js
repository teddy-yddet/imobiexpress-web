use("<nome do banco>");

db.createCollection("exemplo");
db.exemplo.insert({
  nome: "Sidnei",
  sobrenome: "Mitani",
});

// Select the database to use.
use("projeto_ifsp");
const nomes = db
  .getCollection("users")
  .find({
    firstName: "Steve",
  })
  .count();
console.log(`${nomes} encontrados`);

use("projeto_ifsp");
db.getCollection("users").find();

use("projeto_ifsp");
db.getCollection("users").find().pretty();

use("projeto_ifsp");
db.getCollection("users").find({ firstName: "Raul" });

use("projeto_ifsp");
db.getCollection("users").find({ firstName: "Raul" }).limit(2);

use("projeto_ifsp");

db.getCollection("users").insertMany([
  {
    firstName: "Bob",
    lastName: "Dylan",
    email: "bob@dylan.com",
    password: "blowinginthewind",
  },
  {
    firstName: "Janis",
    lastName: "Joplin",
    email: "janis@joplin.com",
    password: "mercebesbenz",
  },
]);
