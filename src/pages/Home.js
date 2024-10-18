import React from "react";
import myImg from "../assets/profile.jpg";
import resume from "../assets/CloudfirstQualityEngineering.CL12.ronalyn.giducos.pptx";
import Footer from "../components/Footer.js";
import "./Home.css";
import TypeWriter from "../pages/TypeWriter.js";
import SocialMedia from "../components/SocialMedia";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="greeting">
          Hello there! <span className="wave">👋</span>
        </h1>
        <h1 className="heading-name">
          I'M
          <strong className="main-name"> Ronalyn Giducos!</strong>
        </h1>
      </header>

      <div className="typewriter-wrapper">
        <TypeWriter />
      </div>
      <br />

      <section className="home-intro">
        <div className="home-intro-content">
          <div className="home-intro-text">
            <p>
              Here you can find information about my projects, skills, and
              experience. Feel free to browse around and get in touch if you
              have any questions!
            </p>
            <div className="download-button-container">
              <a href={resume} className="download-button" download>
                <svg
                  className="download-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 20h14v-2H5v2zm7-17l-5 5h3v4h4v-4h3l-5-5zm-1 9v-6h-1v6h-1l2 2 2-2h-1z" />
                </svg>
                Download My Resume
              </a>
            </div>
            <div className="home-intro-card">
              <p>
                {/* I'm an IT fresh graduate with a passion for software
                development. I'm a full-stack web developer with experience in
                building responsive and user-centric websites using ReactJS and
                NodeJS. */}
                As a newbie in the field, I focus on developing and executing
                test scripts, documenting issues, and collaborating with teams
                to ensure product quality gained through the company’s training
                courses and through coursework at bootcamp. While I don’t have
                project experience yet, I’m continuously upskilling and growing
                my expertise in software testing through effective test
                automation and functional testing.
              </p>
              <p>
                In addition to my strong focus on testing, I am a full-stack web
                developer experienced in building responsive, user-centric
                websites using ReactJS and NodeJS, as well as ASP.Net Web
                Form-based applications gained through academic projects and
                internship. My background in backend development with C# further
                complements my skill set, enabling me to understand both the
                development and testing aspects of software projects.{" "}
              </p>
              <p>
                {/* I also have a strong background in ASP.Net Web Form-based
                applications. I am continuously learning new languages and
                methodologies to widen my knowledge in software development. */}
                I am committed to delivering innovative solutions that exceed
                client expectations while driving technology initiatives to
                success. Continuous learning is essential to my approach, and I
                actively seek to expand my knowledge of programming languages
                and methodologies, including C#, C, Java, HTML, CSS, and
                JavaScript.
              </p>
            </div>
          </div>
          <img src={myImg} alt="Profile" className="home-profile-picture" />
        </div>
      </section>

      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            {/* Right Side: Profile Picture and Get in Touch */}
            <Col md={12} className="about-social-section">
              <h3>Get in Touch</h3>
              <p>
                {" "}
                Whether you want to get in touch, or talk about a project
                collaboration.
                <br />
                <strong>Feel free to connect with me</strong>
              </p>
              <SocialMedia />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
