require("dotenv").config();
const express = require("express");
const cors = require("cors");
const passport = require("passport")
require("./config/passport")
const app = express();
app.use(express.json());

require('./config/database')

const router = require("./routes/routes");

app.use(cors());

app.use("/api", router);

app.listen(4000, () => {
  console.log("El server esta escuchando");
});
