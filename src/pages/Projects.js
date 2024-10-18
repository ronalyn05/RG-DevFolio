import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Footer from "../components/Footer";
import { BiLinkExternal } from "react-icons/bi";
import projectImage1 from "../assets/image3.png";
import projectImage2 from "../assets/image_2.jpg";
import projectImage3 from "../assets/mobile.png";
import projectImage4 from "../assets/mobile-2big.png";
import projectImage5 from "../assets/mobile-maps.png";
import "./Project.css";

const Projects = () => {
  const projects = [
    {
      title: "2BIG - A Water Refilling Station Management System",
      description:
        "The 2BiG: Water Refilling Station Management System is a mobile and web-based application designed to efficiently manage water refilling businesses. It offers features that focus mainly on management for product and order (both online and walk-in order), delivery details and tracking, loyalty programs, employee account and records, report viewing, and inventory control.",
      imgPaths: [projectImage1, projectImage3, projectImage4, projectImage5],
      link: "https://github.com/ronalyn05/WebApp-2big",
    },
    {
      title: "HRIS_EmployeeDB",
      description:
        "This application is designed for HRAdmin. The features for an HRAdmin dashboard include secure login with password change prompts, employee data upload with automatic account creation and dynamic password generation via email, update functionalities for employee information, analytics for new hires and registered employees, filtering by status and facilities, search by name or ID, access control for salary rate visibility, employee report viewing and downloading, and additional features like forgot password and address mapping. Technologies used: React.js (Front-end), Node.js (Back-end), MSSQL (Database).",
      imgPath: projectImage2,
      link: "https://github.com/ronalyn05/iAssist2.0_EmployeeDB",
    },
  ];

  return (
    <div className="d-flex flex-column min-vh-100"  >
      <h1 className="project-heading">
        My Recent <strong className="purple">Works</strong>
      </h1>
      <h3 className="project-subheading">
        Here are a few projects I've worked on recently.
      </h3>
      <Container className="flex-grow-1 my-4 project-section">
        <Row className="justify-content-center">
          {projects.map((project, index) => (
            <Col md={6} lg={4} className="mb-4" key={index}>
              <Card className="project-card-view shadow-sm">
                {Array.isArray(project.imgPaths) ? (
                  <div className="horizontal-scroll-container">
                    {project.imgPaths.map((imgPath, idx) => (
                      <img
                        key={idx}
                        src={imgPath}
                        alt={`Screenshot ${idx + 1} of ${project.title}`}
                        className="project-image"
                      />
                    ))}
                  </div>
                ) : (
                  <Card.Img
                    variant="top"
                    src={project.imgPath}
                    alt={`Screenshot of ${project.title}`}
                    className="project-image-full"
                  />
                )}
                <Card.Body>
                  <Card.Title className="font-weight-bold">{project.title}</Card.Title>
                  <Card.Text className="text-muted">{project.description}</Card.Text>
                  <Button variant="primary" href={project.link} target="_blank">
                    <BiLinkExternal /> &nbsp; View Project
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      
      <Footer className="mt-auto" />
    </div>
  );
};

export default Projects;
