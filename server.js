const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(express.json());

const router = require("./routes/routes");

app.use(cors());

app.use("/api", router);

app.listen(4000, () => {
  console.log("El server esta escuchando");
});
