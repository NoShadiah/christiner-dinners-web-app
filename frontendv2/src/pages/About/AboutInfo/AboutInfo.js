import React from "react";

import "./AboutInfo.css";

const AboutInfo = () => {
  return (
    <div className="section">
      <div className="container grid-container">
        <div>
          <div className="about-info-content">
            <h2 className="heading-secondary">
              A few words <span>about us</span>
            </h2>

            <h4>Let us introduce ourselves</h4>

            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of{" "}
              <span className="special-word">classical</span> Latin literature
              from 45 BC, making it over 2000 years old. Richard McClintock, a
              Latin professor at Hampden-Sydney College in Virginia, looked up
              one of the more obscure Latin words,{" "}
              <span className="special-word">consectetur,</span> from a Lorem
              Ipsum passage
            </p>

            <blockquote>
              Try this: Nulla consequat massa quis enim. Doncus ut, imperdiet a.
            </blockquote>

            <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of{" "}
              <span className="special-word">classical</span> Latin literature
              from 45 BC, making it over 2000 years old. Richard McClintock, a
              Latin professor at Hampden-Sydney College in Virginia, looked up
              one of the more obscure Latin words,{" "}
              <span className="special-word">consectetur,</span> from a Lorem
              Ipsum passage
            </p>
          </div>
        </div>

        <div>
          <div className="about-info-content">
            <h2 className="heading-secondary">
              A PLACE TO RELAX, A PLACE <span>TO DINE/MERGE HEARTS</span>
            </h2>

            <h4>We hope to see you soon!</h4>

            <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of{" "}
              <span className="special-word">classical</span> Latin literature
              from 45 BC, making it over 2000 years old. Richard McClintock, a
              Latin professor at Hampden-Sydney College in Virginia, looked up
              one of the more obscure Latin words,{" "}
              <span className="special-word">consectetur,</span> from a Lorem
              Ipsum passage
            </p>

            <blockquote>
              We love what we do thats what helps us to stand till date
            </blockquote>

            <p>
              G\reat thanks to all our customers from the team behind the dinning room 
              walls, behind the website, they that deliver the foods on time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
