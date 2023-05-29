
const express = require('express');
const mongoose = require('mongoose');
//const path = require('path');

mongoose.connect("mongodb+srv://kbtug21289:12345abc@cluster0.sn7i3i2.mongodb.net/?retryWrites=true&w=majority")
 

const app = express(); 
const routes = require('./routes/routes');

app.use(express.json()); //json request la accept karayla
app.use('/api', routes); //routes madhle method call kivha use karna sathi pahile api lihav lagel m ch hoil
