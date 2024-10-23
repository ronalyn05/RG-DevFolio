import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import myImg from "../assets/profile.jpg";
import certificateImg from "../assets/javascript-cert.png";
import Footer from "../components/Footer";
import SocialMedia from "../components/SocialMedia";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1 className="greeting">
          Know More About &nbsp;&nbsp;{" "}
          <span className="main-name">Ronalyn Giducos</span>
        </h1>
      </header>

      <section className="about-content">
        <Container>
          <Row>
            {/* Left Side: Descriptions */}
            <Col lg={8}>
              {/* About Me Section */}
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>About Me</Card.Title>
                  <Card.Text>
                    Hello! I'm Ronalyn D. Giducos, a fresh graduate with a
                    Bachelor of Science in Information Technology from Cebu
                    Technological University - Main Campus. Currently, I work as
                    an Associate Software Engineer - Quality Engineering
                    Associate at Accenture, based in Cebu, Central Visayas,
                    Philippines.
                    <br />
                    <br />I am passionate about ensuring software quality,
                    focusing on developing and executing test scripts,
                    documenting defects, and collaborating with the application
                    team to resolve issues. I am continuously upskilling and
                    expanding my expertise in software testing and quality
                    assurance, with the goal of delivering high-quality software
                    solutions.
                  </Card.Text>
                </Card.Body>
              </Card>

              {/* Experience and Skills Section */}
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Experience and Skills</Card.Title>
                  <Card.Text>
                    I started working at the age of 16 as a housekeeper and
                    nanny in my teens, and after 8 years of work, I pursued my
                    dream of earning a degree in IT. I’m now focusing on
                    software testing and quality engineering.
                    <br />
                    <br />
                    My current responsibilities at Accenture include:
                    <ul>
                      <li>
                        Develop test scripts, test condition, input test data,
                        and expected results for one or more test streams
                      </li>
                      <li>
                        Develop, update, and maintain testing standards and
                        procedures
                      </li>
                      <li>Execute test scripts</li>
                      <li>
                        Record problems and issues in accordance with the
                        project's problem and issue management plans
                      </li>
                      <li>
                        Document defects using the project's defect management
                        tools
                      </li>
                      <li>
                        Work with the application team to resolve any issues
                        that arise out of the testing process
                      </li>
                      <li>
                        Participate in the release control process to ensure
                        that solutions meet business requirements
                      </li>
                      <li>Validate product fixes</li>
                      <li>
                        Inform the test lead of any issues that may affect the
                        schedule, budget, or quality of the product or the
                        testing process.
                      </li>
                    </ul>
                    Although I’m new to the field, I’m constantly upskilling
                    through Accenture's training programs and coursework at
                    bootcamps. My skill set includes:
                    <ul>
                      <li>Functional Automation Testing</li>
                      <li>TOSCA Test Automation</li>
                      <li>Test Plan and Test Case Development</li>
                      <li>Analyzing Requirement Analysis</li>
                      <li>Client Service</li>
                      <li>Selenium Web Driver</li>
                      <li>Software Development Life Cycle (SDLC)</li>
                      <li>Accenture Delivery Methods (ADM)</li>
                      <li>Accenture Delivery Suite</li>
                      <li>FORM Methodology</li>
                      <li>Collaboration and Communication</li>
                      <li>Code Debugging</li>
                      <li>
                        Frontend and backend web development using ReactJS,
                        ASP.Net
                      </li>
                      <li>
                        Programming languages: HTML, CSS, JavaScript, C#, C,
                        Basic Java
                      </li>
                    </ul>
                    <strong>Tools:</strong> Tosca Commander, Selenium, GitHub,
                    Figma, VS Code, Visual Studio, Sublime Text, Postman, Git
                    <br />
                    <strong>Database:</strong> MySQL, MSSQL, NoSQL (Firebase)
                  </Card.Text>
                </Card.Body>
              </Card>

              {/* Certifications Section */}
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Certifications</Card.Title>
                  <Card.Text>
                    I am continuously gaining professional experience through my
                    classes and bootcamp at Accenture. Here are my
                    certifications:
                  </Card.Text>
                  <ul>
                    <li>
                      <a
                        href="https://academy.tricentis.com/legacy/lms/index.php?r=GamificationApp%2FGamificationApp%2FMyBadges"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Tosca Badge (AS1 & AS2)
                      </a>
                    </li>
                    <li>
                      Tricentis Tosca Fundamentals – Automating Web Applications
                      Testing (AS1) - October 2024
                    </li>
                    <li>
                      Tricentis Tosca Fundamentals − Optimizing Test Automation
                      with Centralized Test Data (AS2) - October 2024
                    </li>
                    <li>
                      Javascript Programming - March 2023 (Bayan Academy
                      Supported by J.P. Morgan)
                    </li>
                  </ul>
                  <img
                    src={certificateImg}
                    alt="Certificate"
                    className="certificate-image"
                  />
                </Card.Body>
              </Card>

              {/* Professional Approach Section */}
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>My Professional Approach</Card.Title>
                  <Card.Text>
                    As a software tester, I am committed to delivering solutions
                    that exceed expectations. My proactive approach focuses on
                    identifying and addressing issues early to ensure smooth
                    project delivery. I aim to:
                    <ul>
                      <li>
                        Contribute to project success through thorough testing
                        and quality assurance.
                      </li>
                      <li>
                        Continuously improve my skills and keep up with the
                        latest technologies in software testing and development.
                      </li>
                      <li>
                        Collaborate effectively with developers, project
                        managers, and business analysts to drive projects to
                        successful completion.
                      </li>
                    </ul>
                    I believe in the power of continuous learning and personal
                    growth. My journey has taught me resilience, discipline, and
                    the importance of teamwork—all of which I apply to my
                    current role and future projects.
                  </Card.Text>
                </Card.Body>
              </Card>

              {/* Goals and Aspirations Section */}
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Goals and Aspirations</Card.Title>
                  <Card.Text>
                    I have a long-term goal of becoming an expert in both
                    software testing and full-stack development, with a focus on
                    delivering quality solutions that meet client needs. I also
                    dream of working abroad, using my skills and experience to
                    make a difference on a global scale.
                    <br />
                    <br />
                    My ultimate aspiration is to continuously evolve as a
                    professional, contribute to meaningful projects, and one day
                    mentor others who are just starting their journey in the
                    tech industry.
                  </Card.Text>
                </Card.Body>
              </Card>

              {/* Technical Expertise Section */}
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Technical Expertise</Card.Title>
                  <div className="expertise-container">
                    <table>
                      <tbody>
                        <tr>
                          <td>Selenium Web Automation</td>
                          <td>★★★★★</td>
                        </tr>
                        <tr>
                          <td>Tosca Test Automation</td>
                          <td>★★★★★</td>
                        </tr>
                        <tr>
                          <td>Manual Testing</td>
                          <td>★★★★★</td>
                        </tr>
                        <tr>
                          <td>Test Automation</td>
                          <td>★★★★★</td>
                        </tr>
                        <tr>
                          <td>API Testing (Postman)</td>
                          <td>★★★★☆</td>
                        </tr>
                        <tr>
                          <td>Basic Java</td>
                          <td>★★★☆☆</td>
                        </tr>
                        <tr>
                          <td>C#</td>
                          <td>★★★★☆</td>
                        </tr>
                        <tr>
                          <td>ASP.NET</td>
                          <td>★★★★☆</td>
                        </tr>
                        <tr>
                          <td>HTML/CSS/JavaScript</td>
                          <td>★★★★★</td>
                        </tr>
                        <tr>
                          <td>SQL</td>
                          <td>★★★☆☆</td>
                        </tr>
                        <tr>
                          <td>ReactJS</td>
                          <td>★★★★★</td>
                        </tr>
                        <tr>
                          <td>NodeJS</td>
                          <td>★★★☆☆</td>
                        </tr>
                      </tbody>
                    </table>
                    <Card.Title>Languages Spoken</Card.Title>
                    <table>
                      <tbody>
                        <tr>
                          <td>English</td>
                          <td>★★★★★</td>
                        </tr>
                        <tr>
                          <td>Filipino</td>
                          <td>★★★★★</td>
                        </tr>
                        <tr>
                          <td>Cebuano</td>
                          <td>★★★★★</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* Right Side: Profile Picture and Get in Touch */}
            <Col lg={4} className="about-profile-section">
              <div className="about-profile">
                <img
                  src={myImg}
                  alt="Profile"
                  className="about-profile-picture"
                />
              </div>

              <div className="about-social-section">
                <h3>Get in Touch</h3>
                <p>
                  Whether you're looking to discuss a project or just want to
                  say hello, feel free to connect with me through the links
                  below:
                </p>
                <SocialMedia />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
