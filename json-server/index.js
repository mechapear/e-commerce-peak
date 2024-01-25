const express = require("express");
const app = express();

const cors = require("cors");

app.use(cors());

let jsonData = require("./db.json");

app.get("/api/products",handleGetProducts);

app.listen(3000, function () {
  console.log("API is ready at http://localhost:3000");
});

function handleGetProducts(req, res) {
  res.send(jsonData.products);
}
