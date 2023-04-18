import React from "react";
import "./HeroImage.css";

const HeroImage = () => {
  return (
    <div
      className="container"
      style={{
        background: `url(https://tinyurl.com/4zwaa93s) no-repeat bottom center/cover`,
        height: "60vh"
      }}
    >
        <div className="banner-content">
            <h1 className="heading-primary">The home of tastes</h1>
            <p className="text-white">Its all about your choice</p>
        </div>
    </div>
  );
};

export default HeroImage;
