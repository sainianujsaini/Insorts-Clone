const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://127.0.0.1:27017/inshorts' , {useNewUrlParser:true}).then(()=>{console.log('Connected to DB successfully');}).catch((err)=>{console.log("Error connecting DB",err);});

module.exports = db;