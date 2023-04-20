import React from "react";
import "./OurChef.css";

const OurChef = () => {
  return (
    <div>
      <div className="main">
        <div className="content">
          <h1>A Word From Our Chef</h1>
          <p>
            At Navz we offer an all-round culinary experience with dishes
            that may tingle the taste buds of a young and mature audience, those
            who prefer savory dishes and those with a sweet tooth. We indulge
            your appetite for fresh, quality meals made with passion, expertise
            and an eye for detail. Our a la carte menu also offers seasonal
            specials and we cater for vegetarian and vegan options too. We look
            forward to hosting you for breakfast, your business lunch and wind
            down dinners, for drinks or a cake and coffee break, Navz
            awaits you.
          </p>
        </div>
        <div className="img">
          <img
            src="chef.jpeg"
            alt="chef"
            style={{ width: "100%", height: "100%",marginRight:"10%" }}
          />
        </div>
      </div> <br></br>
    </div> 
  );
};

export default OurChef;
