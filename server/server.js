const express=require("express");
const dotenv= require("dotenv");
const connectDB=require("./config/config");
require("colors");
const morgan=require("morgan");
const mongoose = require('mongoose');
 // updates
var cors = require('cors');

app.use(cors())
 // updates


dotenv.config({ path: './config.env' });
const DB = process.env.MONGO_URI.replace('<PASSWORD>', process.env.PASSWORD);

mongoose.connect(DB).then(() => {
  console.log('DB connection successful!!!');
});

const app=express();

app.use(express.json());
app.use(morgan('dev'));

app.use("/api/pizzas", require("./routes/pizzaRoute"));
app.use("/api/users", require("./routes/userRoute"));
app.use("/api/orders", require("./routes/orderRoute"));
app.get("/",()=>{
  // updates
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
   // updates
});

const port =process.env.PORT || 8080
app.listen(port, ()=>{
 console.log(`Server Running on ${process.env.PORT}`);
});