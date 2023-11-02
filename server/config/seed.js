const db = require("./connection");
const { User, Product } = require("../models");
const cleanDB = require("./cleanDB");

db.once("open", async () => {
  await cleanDB("Product", "products");

  const products = await Product.create({
    name: "Gotcha Coin",
    description:
      "Use these coins to play our games! You must use one coin per game.",
    image: "arcade-coin.jpg",
    price: 10.0,
    quantity: 500,
  });

  console.log("product seeded");
});
