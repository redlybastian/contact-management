const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

connectDb();
//@NOTE : middleware for read passing data from clint
app.use(express.json());

app.use("/api/contacts", require("./routes/contactRoutes"));

// @Note : error handler middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
