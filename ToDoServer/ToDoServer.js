const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes/ToDoRoute");

require("dotenv").config();

const app = express();
const SERVER_PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB connection established"))
  .catch((err) => console.log(err));

app.use(routes);

app.listen(SERVER_PORT, () =>
  console.log(`Server is up and listening on port: ${SERVER_PORT}`)
);
