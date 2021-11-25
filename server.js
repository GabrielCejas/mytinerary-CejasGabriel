const express = require("express");
const cors = require("cors");

const cities = [
  { name: "Berlin", country: "Germany", photo: "berlin.jpg" },
  { name: "London", country: "England", photo: "londres.jpg" },
  { name: "Paris", country: "France", photo: "paris.jpg" },
  { name: "Moscow", country: "Russia", photo: "moscu.jpg" },
  { name: "Lisbon", country: "Portugal", photo: "lisboa.jpg" },
  { name: "Tokyo", country: "Japan", photo: "tokio.jpg" },
  { name: "Vienna", country: "Austria", photo: "viena.jpg" },
  { name: "Washinton", country: "EEUU", photo: "washinton.jpg" },
  { name: "Nueva York", country: "EEUU", photo: "nuevaYork.jpg" },
  { name: "Athens", country: "Greece", photo: "grecia.jpg" },
  { name: "Madrid", country: "Spain", photo: "madrid.jpg" },
  { name: "Zurich", country: "Switzerland ", photo: "zurich.jpg" },
  { name: "Buenas Aires", country: "Argentina ", photo: "buenosAires.jpg" },
  { name: "São Paulo", country: "Brazil", photo: "sanPablo.jpg" },
  { name: "Cancun", country: "Mexico", photo: "cancun.jpg" },
];

const app = express();
app.use(cors());

app.get("/api/datos", (req, res) => {
  res.json({ response: { cities } });
});

app.listen(4000, () => {
  console.log("El server esta escuchando");
});
