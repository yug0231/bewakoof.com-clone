import Footer from "../Footers/Footer";
import "./homepage.css"
import widebanner100 from "../../Images/homepage/100.jpg"
import widebanner99 from "../../Images/homepage/99.webp"
import grid1 from "../../Images/homepage/grid1.webp"
import grid2 from "../../Images/homepage/grid2.jpg"
import grid3 from "../../Images/homepage/grid3.webp"
import grid4 from "../../Images/homepage/grid4.webp"
import { Link } from "react-router-dom";
const Homepage=()=>{
return <div id="homepage">
    <div id="stoopidSection">
    <h1>THE STOOPID SECTION</h1>
    <div className="stupidSectionGridBoxes">
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