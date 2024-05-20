const express=require("express");
const dotenv= require("dotenv");
const connectDB=require("./config/config");
require("colors");
const morgan=require("morgan");
const mongoose = require('mongoose');


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

});

const port =process.env.PORT || 8080
app.listen(port, ()=>{
 console.log(`Server Running on ${process.env.PORT}`);
});