const express = require('express');
const route = express.Router();
const News = require('../model/news_schema');

route.get('/news', async (req,res)=>{
   
try{
    let data = await News.find({});
    res.status(200).json(data);
}
catch(err){
    console.log(err.message);
    res.status(500);
}
});

module.exports = route;