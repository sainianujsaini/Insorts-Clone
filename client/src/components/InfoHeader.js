const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png';
const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png';
const InfoHeader = () =>{
    return (
      <div className="d-none d-lg-block">
      <div className="d-flex m-auto" style = {{"marginTop":"0px" ,"width":"70%" , "background":"#f44336"}}>
            <p className="mt-2 text-white ps-3 pr-3">For the best experience use inshorts app in your smartphone</p>
            <div className="d-flex" style = {{"marginLeft":"auto"}}>
          <span> <img src = {appleStore} height = "30px" className="mt-2 me-4"/></span> 
           <span> <img src = {googleStore}  height = "30px" className="mt-2 me-4" /></span> 
           </div>
            </div>
            </div>
            

    )
}
export default InfoHeader;