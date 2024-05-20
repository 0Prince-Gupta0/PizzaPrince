const mongoose = require('mongoose');
const dotenv = require('dotenv');


dotenv.config({ path:`${__dirname}/../c.env`});

const connectDB = async ()=>{
    const DB = process.env.MONGO_URI.replace('<PASSWORD>', process.env.PASSWORD);

mongoose.connect(DB).then(() => {
  console.log('DB connection successful!!');
});

}

module.exports= connectDB;