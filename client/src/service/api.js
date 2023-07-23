import axios from 'axios'
export const getNews = async()=>{
    const URL = 'http://localhost:5000/news';
    try{
        return await axios.get(URL);

    }
    catch(error){
        console.log("Error in getting news api",error);
    }
}