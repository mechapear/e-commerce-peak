const express = require("express");
const app = express();

const cors = require("cors");

app.use(cors());

let jsonData = require("./db.json");

app.get("/", function (req, res) {
  res.send(jsonData);
});

app.listen(3000, function () {
  console.log("Aplicación de pruebas escuchando en el puerto 3000!");
});
