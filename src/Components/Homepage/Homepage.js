import Footer from "../Footers/Footer";
import "./homepage.css"
import widebanner100 from "../../Images/homepage/100.jpg"
import widebanner99 from "../../Images/homepage/99.webp"
import widebanner98 from "../../Images/homepage/98.webp"
import widebanner96 from "../../Images/homepage/96.jpg"
import grid1 from "../../Images/homepage/grid1.webp"
import grid2 from "../../Images/homepage/grid2.jpg"
import grid3 from "../../Images/homepage/grid3.webp"
import grid4 from "../../Images/homepage/grid4.webp"
import grid5 from "../../Images/homepage/grid5.webp"
import grid6 from "../../Images/homepage/grid6.webp"
import grid7 from "../../Images/homepage/grid7.jpg"
import grid8 from "../../Images/homepage/grid8.jpg"
import { Link } from "react-router-dom";

const Homepage=()=>{
return <div id="homepage">
<Link to=""><img src={widebanner96} className="wideBannerImg"/></Link>
     <div id="gridSection">
    <h1>THE GANGS FAVOURITE</h1>
    <div className="gridSectionGridBoxes">
    <Link to=""><img src={grid5} className="wideBannerImg"/></Link>
    <Link to=""><img src={grid6} className="wideBannerImg"/></Link>
    <Link to=""><img src={grid7} className="wideBannerImg"/></Link>
    <Link to=""><img src={grid8} className="wideBannerImg"/></Link>
    </div></div>
<div className="categoryRow"></div>
<Link to=""><img src={widebanner98} className="wideBannerImg"/></Link>

    <div id="gridSection">
    <h1>THE STOOPID SECTION</h1>
    <div className="gridSectionGridBoxes">
    <Link to=""><img src={grid1} className="wideBannerImg"/></Link>
    <Link to=""><img src={grid2} className="wideBannerImg"/></Link>
    <Link to=""><img src={grid3} className="wideBannerImg"/></Link>
    <Link to=""><img src={grid4} className="wideBannerImg"/></Link>
    </div>
    </div>
    <Link to=""><img src={widebanner99} className="wideBannerImg"/></Link>
    <Link to=""><img src={widebanner100} className="wideBannerImg"/></Link>
    <Footer/>
</div>

}

export default Homepage;