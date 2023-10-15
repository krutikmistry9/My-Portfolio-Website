import React from "react";
import me from "../images/me.jpeg";
import "animate.css";

const AboutScreen = () => {
  return (
    <div>
      <div className="secondView">
        <div className="aboutLeft">
          <h1>
            {" "}
            Hello, I am Krutik Mistry!{" "}
            <img className="profilePic" src={me} alt=""></img>
          </h1>
          <hr></hr>
          <p className="infoP">
            My interests lies in technology and how it can produce value to
            people and organizations. To me, data science and Web development
            are the most appealing areas of tech.
          </p>
          <p className="infoP">
            The combination of an intriguing Bachelor's Engineering at Sarvajanik College of Engineering and Technology
            and a rewarding Web development internship
            led to the decision of deepening my knowledge within the areas of my
            interests. 
          </p>

          <p className="infoP">
            Besides Web Development courses, I have taken various data
            science and machine learning courses such as deep learning, scalable
            machine learning, and data analysis. The ability to find patterns in
            vast datasets using different techniques is ridiculously interesting
            and something I want to do during my career.
          </p>

          <p className="infoP">Check out some of my projects :)</p>
          <a className="btn-type-one" href="#projects">
            Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
