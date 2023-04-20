import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="section footer">
      <div className="container">
        <div className="grid-container">
          <div className="footer-grid-item">
            <h3>Kamwokya</h3>
            <p>Bukoto street plot 19</p>
            <p>Kampala Uganda</p>
            <p>0701 389 976/ 0771 389 976</p>
            <Link to="#" className="text-white">
              bukoto@navzs-restaurant.com
            </Link>
        
          </div>

          <div className="footer-grid-item">
            <h3>Kololo</h3>
            <p>Opposite Kololo SS</p>
            <p>kampala Uganda</p>
            <p>0708 774 433</p>
            <Link to="#" className="text-white">
              kololo@navzs-restaurant.com
            </Link>
          </div>

          <div className="footer-grid-item">
            <h3>Lugogo</h3>
            <p>Shoprite</p>
            <p>Kampala Uganda</p>
            <p>0778 345 888</p>
            <Link to="#" className="text-white">
              lugogo@navzs-restaurant.com
            </Link>
          </div>

          <div className="footer-grid-item">
            <h3>Wandegeya</h3>
            <p>Makerere Eastern gate</p>
            <p>Kampala Uganda</p>
            <p>0702 389 976</p>
            <Link to="#" className="text-white">
              wandegeya@navzs-restaurant.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
