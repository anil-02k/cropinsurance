// OtherLinks.js
import React from 'react';
import './OtherLinks.css'; // If you prefer to keep CSS separate
 import hands from '../Assets/hand.png'
 import shopping from '../Assets/shopping-cart.png'
 import thunder from '../Assets/thunder.png'
 import video from '../Assets/video-tutorial.png'
const OtherLinks = () => {
  return (
    <div style={{ height: '91vh', width: '100%' }}>
      <div className="heading">OTHER LINKS</div>
      <div className="cardcontainer">
        <div className="ecard ec1">
          <img src={shopping} alt="" className="cart" />
          <p className="buy">BUY<br />PRODUCTS</p>
        </div>
        <div className="ecard ec2">
          <img src={hands} alt="" className="sellbtn" />
          <p className="sell">Sell<br />Crops</p>
        </div>
        <div className="ecard ec3">
          <img src={video} alt="" className="tuts" />
          <p className="Tutorial">TUTORIALS</p>
        </div>
        <div className="ecard ec4">
          <img src={thunder} alt="" className="thunder" />
          <p className="whether">WEATHER</p>
        </div>
      </div>
    </div>
  );
};

export default OtherLinks;
