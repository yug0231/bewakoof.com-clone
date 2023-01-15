import React from "react";
import "./footer.css";
import fb30 from "../../Images/socialMediaIcons/fb30.png"
import insta30 from "../../Images/socialMediaIcons/insta.png"
import twi30 from "../../Images/socialMediaIcons/twitter.png"
import pin30 from "../../Images/socialMediaIcons/pinterest.png"
import snap30 from "../../Images/socialMediaIcons/snapchat.png"
import app30 from "../../Images/socialMediaIcons/apple.png"
import paymentcards from "../../Images/secure-payments-image.webp"
const Footer = () => {
  return (
    <div id="footer">
      <div id="footerTop">
       <div class="footerTopColumn">
            <h2>CUSTOMER SERVICE</h2>
            <p>Contact Us</p>
            <p>Track Order</p>
            <p>Return Order</p>
            <p>Cancel Order</p>
       </div>
       <div class="footerTopColumn">
            <h2>COMPANY</h2>
            <p>About Us</p>
            <p>We're Hiring</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Blog</p>
       </div>
       <div class="footerTopColumn">
            <h2>CONNECT WITH US</h2>
            <span className="socialmediaHide"><img className="socialIcon" src={fb30}/><p>4.7M People Like this</p></span>
            <span className="socialmediaHide"><img className="socialIcon" src={insta30}/><p>1M Followers</p></span>
            <span className="socialMediaRow">
            <img className="socialIcon" src={twi30}/>
            <img className="socialIcon" src={pin30}/>
            <img className="socialIcon" src={snap30}/>
            <img className="socialIcon" src={app30}/>
            </span>
       </div>
       <div class="footerTopColumn">
            <h2>KEEP UP TO DATE</h2>
            <span className="subscribeBox"><input type="text" placeholder="Enter Your Email" className="subscribeEmailBox"/>
            <button className="subscribeBtn">Subscribe</button></span>
       </div>
       <div class="footerTopColumn">
            <h2>KEEP UP TO DATE</h2>
            <span className="subscribeBox"><input type="text" placeholder="Enter Your Email" className="subscribeEmailBox"/>
            <button className="subscribeBtn">Subscribe</button></span>
       </div>
       <div class="footerTopColumn">
            <h2>KEEP UP TO DATE</h2>
            <span className="subscribeBox"><input type="text" placeholder="Enter Your Email" className="subscribeEmailBox"/>
            <button className="subscribeBtn">Subscribe</button></span>
       </div>
       <div class="footerTopColumn">
            <h2>100% SECURE PAYMENT</h2>
            <img src={paymentcards}/>
       </div>
      </div>
    </div>
  );
};
export default Footer;
