const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_DATA,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("Database connect"))
  .catch((err) => console.err(err));
