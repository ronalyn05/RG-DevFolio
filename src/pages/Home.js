import React from "react";
import myImg from "../assets/image1.JPG";
import resume from "../assets/Giducos_updated Resume.pdf";
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
        {/* <h1>I'm Ronalyn Giducos!</h1> */}
        <h1 className="heading-name">
          I'M
          <strong className="main-name"> Ronalyn Giducos!</strong>
        </h1>
        {/* <div className="job-titles">
          <h4 className="software-engineer">Software Engineer</h4>
        </div> */}
      </header>
      <div className="heading-type">
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
                I'm an IT fresh graduate with a passion for software
                development. I'm a full-stack web developer with experience in
                building responsive and user-centric websites using ReactJS and
                NodeJS.
              </p>
              <p>
                I also have a strong background in ASP.Net Web Form-based
                applications. I am continuously learning new languages and
                methodologies to widen my knowledge in software development.
              </p>
              {/* <strong>Please feel free to reach out to me!</strong>
              <p>
                Whether you want to get in touch or talk about a project
                collaboration.
              </p> */}
            </div>
          </div>
          <img src={myImg} alt="Profile" className="home-profile-picture" />
        </div>
      </section>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>Get in Touch</h1>
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
