require("dotenv").config();
const express = require("express");
const cors = require("cors");
const passport = require("passport");
require("./config/passport");
const app = express();
app.use(express.json());
const path = require("path");

var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

require("./config/database");

const router = require("./routes/routes");

app.use(cors());
app.use(passport.initialize());
app.use("/api", router);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });
}

app.listen(process.env.PORT || "5000", () => {
  console.log(` El server esta en el puerto ${process.env.PORT || "5000"}`);
});
