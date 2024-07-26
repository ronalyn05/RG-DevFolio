// src/pages/About.js
import React from "react";
import Footer from "../components/Footer.js";

const About = () => {
  return (
    <div>
      <main>
        <h2>About Me</h2>
        <h4>Hello there!</h4>
        <p>
          I'm a passionate Full Stack Web Developer with hands-on experience
          gained through internships and academic projects. During my
          internship, I honed my skills in front-end and back-end development,
          gaining proficiency in technologies such as HTML, CSS, JavaScript,
          Node.js, and ReactJS. As for the database, i used MSSQL. My capstone
          project showcases my ability to design and develop scalable web
          applications that meet business needs effectively. I leveraged
          frameworks like ASP.net (web form - based application) and Firebase to
          create responsive and dynamic user interfaces, alongside implementing
          robust server-side functionalities. Throughout my academic journey, I
          undertook various school projects that further enriched my
          understanding of software development principles. These projects
          allowed me to experiment with different technologies, improving my
          problem-solving skills and creativity. I am committed to continuous
          learning and staying updated with the latest technologies in web
          development. I am eager to contribute my skills and expand my
          knowledge in a dynamic and innovative environment. Let's connect and
          explore opportunities to create impactful solutions together!
        </p>
        <strong>My technology skillset includes:</strong>
        <ul>
          <li>
            <strong>Languages:</strong> Javascript, Html, CSS, C, C#, PHP
          </li>
          <li>
            <strong>Frameworks:</strong> ReactJS, ASP.Net Web Form, Laravel
          </li>
          <li>
            <strong>Tools:</strong> VS Code, Visual Studio, Figma, Postman,
            Sublime Text, Github
          </li>
          <li>
            <strong>Databases:</strong> MSSQL, NoSql (Firebase), MySQL
          </li>
        </ul>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
