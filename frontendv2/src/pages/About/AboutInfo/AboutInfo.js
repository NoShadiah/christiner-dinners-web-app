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
             Navz Opened its doors to its customers on 3rd july 2020.In the span of 3years, the restaurant
              has become one of the leading restaurants in kampala{" "}
              <span className="special-word"></span> The restaurant offers many features
              ,which may not other restaurants in kampala have{" "}
              <span className="special-word">we have so many branches around kampala,</span> our main branch 
              is in kamwokya,Bukoto street plot 19
            </p>

            <blockquote>
              Opening Hours.
            </blockquote>

            <p>Sunday - Thursday 6.30 AM to 11:00 PM
             <br></br>
           Friday - Saturday 6.30 AM to 12:00 AM
            {" "}
              <span className="special-word"></span>{" "}
              <span className="special-word"></span>
            </p>
          </div>
        </div>

        <div>
          <div className="about-info-content">
            <h2 className="heading-secondary">
              WE ARE NAVZ
            </h2>

            <h4>We hope to see you soon!</h4>

            <p>
            Navz delivers any product in your city within minutes.
             We have built a  technology that connects customers with local
             businesses through a vast network of couriers who sign up to offer their delivery services. {" "}
              <span className="special-word">The project</span> was born with the aim of transforming the way users get what they need, making cities more accessible.
               At Navz we want to give everyone easy access to anything in their city, whilst having a sustainable impact on the economy, society and the environment:
               we’re a tech-first, responsible company. {" "}
              <span className="special-word"></span> 
            </p>

            <blockquote>
              We love what we do thats what helps us to stand till date
            </blockquote>

            <p>
              G\reat thanks to all our customers from the team behind the kitchen, behind the website, they that deliver the foods on time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
