import React from "react";
import Images from "../../assets/images/pp.jpg";
import "../../App.css";
function About() {
  return (
    <>
      <div className="about-sub">
      <div className="body_section" id="about">
        <img src={Images} />
        <div className="intro">
          <h1>About Me</h1>
          <p>
            Hello! My name is Sayal Limbu, and I am currently studying in Grade
            11. I live in the beautiful country of Nepal. I am passionate about
            technology and creativity, and I really enjoy coding. Recently, I
            created my very first website using HTML and CSS, which made me even
            more interested in web development. I’m always excited to learn new
            skills and explore the world of programming.
          </p>
        </div>
        </div>
      </div>
    </>
  );
}

export default About;
