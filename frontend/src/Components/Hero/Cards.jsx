import React from "react";
import one from '../Assets/6.png';
import two from '../Assets/2.png';
import three from '../Assets/3.png';
import four from '../Assets/4.png';
import five from '../Assets/5.png';
import "./Cards.css";

const Cards = () => {
  return (
    <div>
      <div className="right-scroller">
          <div className="wrapper">
            <div className="card">
              <div className="card_image card_image_background">
                <img
                  src={one}
                  alt="goblin"
                  className="farmerVector"
                />
              </div>
              <div className="text">
                <p>
                  Farmer Corner
                </p>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="card">
              <div className="card_image card_image_background">
                <img
                  src={two}
                  alt="goblin"
                />
              </div>
              <div className="text">
              <p>
                  Premium Calculator
                </p>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="card">
              <div className="card_image card_image_background">
                <img
                  src={three}
                  alt="goblin"
                />
              </div>
              <div className="text">
              <p>
                  Report Crop Loss
                </p>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="card">
              <div className="card_image card_image_background">
                <img
                   src={four}
                  alt="goblin"
                />
              </div>
              <div className="text">
              <p>
                  Application Status
                </p>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="card">
              <div className="card_image card_image_background">
                <img
                   src={five}
                  alt="goblin"
                />
              </div>
              <div className="text">
              <p>
                  Weather Data
                </p>
              </div>
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default Cards;
