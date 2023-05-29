const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  name: {
   
    type: String
  },
  age: {
    
    type: Number
  },
  rollno: Number,
  
},{timestamps:true})

const model = mongoose.model('Data', dataSchema);
module.exports = model;