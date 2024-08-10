const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("mongoose Connected");
});

let connectionUri = process.env.URI;
connectionUri = connectionUri.replace("<username>", process.env.USER_NAME);
connectionUri = connectionUri.replace("<password>", process.env.PASSWORD);
connectionUri = `${connectionUri}/${process.env.STORED_DATA_NAME}?${process.env.QUERY_STRING}`;

const main = async () => {
  try {
    await mongoose.connect(connectionUri);

    app.listen(port, () => {
      console.log(`The Port is Running at: ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

main();
