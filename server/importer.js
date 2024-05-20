const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Pizza = require('./models/pizzaModel');

dotenv.config({ path: './c.env' });
const DB = process.env.MONGO_URI.replace('<PASSWORD>', process.env.PASSWORD);

mongoose.connect(DB).then(() => {
  console.log('DB connection successful!!!');
});

const tours = JSON.parse(
  fs.readFileSync(`./data/pizza-data.js`, 'utf-8')
);

const importData = async () => {
  try {
    await Pizza.create(tours);
    console.log('Imported Successfully');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

const deleteData = async () => {
  try {
    await Pizza.deleteMany();
    console.log('Deleted Successfully');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

console.log(process.argv);

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}

