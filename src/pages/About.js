import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import Footer from "../components/Footer.js";

// Sample logos, you need to replace these with actual paths or URLs to logos
const logos = {
  Javascript:
    "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  Html: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
  CSS: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
  C: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
  CSharp: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png",
  PHP: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
  ReactJS: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  ASPNet:
    "https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg",
  Laravel: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
  VSCode:
    "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
  VisualStudio:
    "https://upload.wikimedia.org/wikipedia/commons/5/59/Visual_Studio_Icon_2019.svg",
  Figma: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
  Postman:
    "https://upload.wikimedia.org/wikipedia/commons/c/c2/Postman_%28software%29.png",
  SublimeText:
    "https://upload.wikimedia.org/wikipedia/en/d/d2/Sublime_Text_3_logo.png",
  Github:
    "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
  MSSQL:
    "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
  Firebase:
    "https://upload.wikimedia.org/wikipedia/commons/4/45/Firebase_Logo.svg",
  MySQL: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg",
};

const About = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Container className="flex-grow-1 my-4">
        <main>
          <Row>
            <Col lg={8}>
              <Row className="mb-4">
                <Col lg={12}>
                  <Card className="mb-4">
                    <Card.Body>
                      <Card.Title>About Me</Card.Title>
                      <Card.Text>
                        I'm a passionate Full Stack Web Developer with hands-on
                        experience gained through internships and academic
                        projects. During my internship, I honed my skills in
                        front-end and back-end development, gaining proficiency
                        in technologies such as HTML, CSS, JavaScript, Node.js,
                        and ReactJS. As for the database, I used MSSQL.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={12}>
                  <Card className="mb-4">
                    <Card.Body>
                      <Card.Text>
                        My capstone project showcases my ability to design and
                        develop scalable web applications that meet business
                        needs effectively. I leveraged frameworks like ASP.net
                        (web form - based application) and Firebase to create
                        responsive and dynamic user interfaces, alongside
                        implementing robust server-side functionalities.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={12}>
                  <Card className="mb-4">
                    <Card.Body>
                      <Card.Text>
                        Throughout my academic journey, I undertook various
                        school projects that further enriched my understanding
                        of software development principles. These projects
                        allowed me to experiment with different technologies,
                        improving my problem-solving skills and creativity.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={12}>
                  <Card className="mb-4">
                    <Card.Body>
                      <Card.Text>
                        I am committed to continuous learning and staying
                        updated with the latest technologies in web development.
                        I am eager to contribute my skills and expand my
                        knowledge in a dynamic and innovative environment. My
                        goal is to build impactful solutions and continue
                        growing in my career.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col lg={4}>
              <Card>
                <Card.Body>
                  <Card.Title>My Technology Skillset Includes:</Card.Title>
                  <ListGroup>
                    <ListGroup.Item>
                      <strong>Languages:</strong>
                      <div>
                        {[
                          "Javascript",
                          "Html",
                          "CSS",
                          "C",
                          "CSharp",
                          "PHP",
                        ].map((tech) => (
                          <a
                            key={tech}
                            href={`https://www.google.com/search?q=${tech}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="me-3"
                          >
                            <img
                              src={logos[tech]}
                              alt={`${tech} logo`}
                              style={{ width: "40px", height: "40px" }}
                            />
                          </a>
                        ))}
                      </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Frameworks:</strong>
                      <div>
                        {["ReactJS", "ASPNet", "Laravel"].map((tech) => (
                          <a
                            key={tech}
                            href={`https://www.google.com/search?q=${tech}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="me-3"
                          >
                            <img
                              src={logos[tech]}
                              alt={`${tech} logo`}
                              style={{ width: "40px", height: "40px" }}
                            />
                          </a>
                        ))}
                      </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Tools:</strong>
                      <div>
                        {[
                          "VSCode",
                          "VisualStudio",
                          "Figma",
                          "Postman",
                          "SublimeText",
                          "Github",
                        ].map((tech) => (
                          <a
                            key={tech}
                            href={`https://www.google.com/search?q=${tech}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="me-3"
                          >
                            <img
                              src={logos[tech]}
                              alt={`${tech} logo`}
                              style={{ width: "40px", height: "40px" }}
                            />
                          </a>
                        ))}
                      </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Databases:</strong>
                      <div>
                        {["MSSQL", "Firebase", "MySQL"].map((tech) => (
                          <a
                            key={tech}
                            href={`https://www.google.com/search?q=${tech}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="me-3"
                          >
                            <img
                              src={logos[tech]}
                              alt={`${tech} logo`}
                              style={{ width: "40px", height: "40px" }}
                            />
                          </a>
                        ))}
                      </div>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </main>
      </Container>
      <Footer className="mt-auto" />
    </div>
  );
};

export default About;
