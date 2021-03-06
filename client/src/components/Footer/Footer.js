import React from "react";
import "./Footer.css"


const Footer = () => (
  <div className="footer">
    <div className="row">
      <div className="col-2"></div>  {/* Spacer*/}

      <div id="addr" className="col-8">
        <p>Address: 117 N Main St, Mt Holly, NC 28120 | Phone: (704) 820-6556</p>
        <p>
        Hours: Sunday Closed | Monday-Thursday 7AM–8PM | Friday 7AM–9PM | Saturday 8AM–8PM </p>
      </div> {/* addr*/}

      <div id="media" className="col-2">
        <a href="https://www.facebook.com/catawbacoffeeco/">
          <img className="img-responsive1" src={require("../../images/fb.png")} alt="Facebook" width="35" height="35" />
        </a>
        <a href="https://www.yelp.com/biz/catawba-coffee-co-mount-holly">
          <img className="img-responsive2" src={require("../../images/Yelp.png")} alt="Yelp" width="35" height="35" /></a>
        <a href="https://www.instagram.com/catawbacoffeeco/">
          <img className="img-responsive3" src={require("../../images/Instagram.png")} alt="Instagram" width="35" height="35" /></a>
      </div> {/* media end*/}
    </div>
  </div>


);


export default Footer;