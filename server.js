require("dotenv").config();
const express = require("express");
const cors = require("cors");
const passport = require("passport");
require("./config/passport");
const app = express();
app.use(express.json());

require("./config/database");

const router = require("./routes/routes");

app.use(cors());
app.use(passport.initialize());
app.use("/api", router);


app.listen( process.env.PORT || 4000, process.env.HOST || '0.0.0.0' , () => {
  console.log(` El server esta en el puerto ${process.env.PORT || 4000}`);
});
