import InfoHeader from "./InfoHeader";

const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';
const Header = () => {
    return (
        <div>
            <nav className="navbar bg-body-tertiary shadow-sm p-3 mb-5 bg-body-tertiary rounded " style = {{"height" : "72px", "zIndex": "100", "position": "fixed", "width": "100%", "top": "0"}}>
                <div className="container-fluid ms-1" >
                    <span className="navbar-brand  h1 ">
                        <img src = "/menu.png" height = "25px" /> Menu
                    </span>
                    <span className = "m-auto" style = {{paddingRight:"50px"}}><img src = {url} height = "60px" style = {{"marginRight":"100px"}}/></span>
                </div> 
            </nav> 
            
        </div>
    )
}

export default Header;
