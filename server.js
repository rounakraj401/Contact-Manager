const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");
const connectDb=require("./config/dbConnection.js");
const mongoose = require('mongoose');

connectDb();   //calling the function to connect the database

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(port , ()=>{
   console.log(`server running on port ${port}`);
});