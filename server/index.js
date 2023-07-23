const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
app.use(cors());
const port = 5000;
const db = require('./database/db');
const DefaultData = require('./Default');
DefaultData();
app.use('/' , require('./routes/route'));
app.listen(port , (err)=>{
    if(err){console.log("There is error in running server",err);}
    else{console.log('App is up on port',port);}
});
