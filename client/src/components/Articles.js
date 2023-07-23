import { useEffect, useState } from "react";
import { getNews } from '../service/api'


const Articles = () => {

    const [news, setNews] = useState([]);

    useEffect(() => {
        dailyNews();
    }, [])

    const dailyNews = async () => {
        let response = await getNews();
        // console.log(response.data);
        setNews(response.data);
    }
    return (

        <div className="text-start mt-3" style={{ "width": "70%", "margin": "auto" }}>
            {news.map((data) => {
                return (
                    <div>
                    <div className="container mb-3 card p-3" style={{  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)"}}>
                            <div className="row">

                                <div id="image" className="col-lg-5 col-sm-12" >
                                <img src={data.url} style={{ width: "100%",marginRight:"0px", height: "282px",maxHeight:"282px", objectFit: "fill",overflow:"hidden" }} />
                                </div>

                                <div id="text" className="col-lg-6  col-sm-12">
                                <p className = "mb-0"style={{ fontFamily: "'Roboto', sans-serif", fontWeight: "300" , fontSize:"20px" ,opacity:"0.8", color:"#44444d" , "lineHeight":"27px" }}>{data.title}</p>
                                <b>short</b> by {data.author} / {new Date(data.timestamp).toDateString()}
                                <p className="mt-2" style = {{"lineHeight":"22px",color:"#44444d"}}>{data.description}</p>
                                
                                
                                read more at <a href={data.link} target="_blank" style={{ textDecoration: "none", color: "#000", fontWeight: "600" }}>{data.publisher}</a>
                                 </div>

                            </div>
                        </div>



                    </div>
                )
            })}
        </div>
    )
}
export default Articles;
