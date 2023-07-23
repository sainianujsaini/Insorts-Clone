const data = require('./constant/data');
const News = require('./model/news_schema');

const DefaultData = async()=>{
    try{
        
       await News.insertMany(data);
       console.log("data imported");
    }
    catch(err){
        console.log("Error" , err.message);
    }
}

module.exports = DefaultData;