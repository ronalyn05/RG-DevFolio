// src/pages/Home.js
import React from "react";
import "../style.css";
import myImg from "../assets/image1.JPG";
import resume from "../assets/Giducos_updated Resume.pdf";
import Footer from "../components/Footer.js";

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        {/* <img src="/logo.png" alt="Logo" className="home-logo" /> */}
        <h1>Hi, I'm Ronalyn!</h1>
      </header>
      <section className="home-intro">
        <div className="home-intro-text">
          <p>
            I am an IT fresh graduate with a passion for software development.
            I'm a full-stack web developer with experience in building
            responsive and user-centric websites using ReactJS and NodeJS. I
            also have a strong background in ASP.Net Web Form-based
            applications. I am continuously learning new languages and
            methodologies to widen my knowledge in software development. Please
            feel free to reach out to me.
          </p>
          <div className="home-links">
            <a href={resume} target="_blank" rel="noopener noreferrer">
              View My Resume
            </a>
            {/* <a
              href="https://www.linkedin.com/in/giducos-ronalyn-0794922b0"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/ronalyn05/RG-DevFolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a> */}
          </div>
        </div>
        <img src={myImg} alt="Profile" className="home-profile-picture" />
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
