const mongoose = require('mongoose');

async function dbconnect(){
  try {
     mongoose.connect('mongodb+srv://np93730:EL734X4lSQbqnIW9@realstate.okxpzon.mongodb.net/?retryWrites=true&w=majority&appName=realstate');
     console.log("database connect successfully")
  } catch (error) {
    console.log(error)
  }
}

module.exports = dbconnect;