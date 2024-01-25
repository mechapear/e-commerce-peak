const express = require("express");
const app = express();

const cors = require("cors");

app.use(cors());

let jsonData = require("./db.json");

app.get("/api/products", handleGetProducts);
app.get("/api/product/:id", handleGetProduct);

app.listen(3000, function () {
  console.log("API is ready at http://localhost:3000");
});

function handleGetProducts(req, res) {
  res.send(jsonData.products);
}

function handleGetProduct(req, res) {
  // Usign req.params to get a URL params value
  const id = Number(req.params.id);
  const selectedProduct = jsonData.products.find((product) => {
    return product.id === id
  })
  
  // Handle if product not found
  if(selectedProduct){
    res.status(200).send(selectedProduct);
  } else {
    res.status(404).send(null);
  }
}
