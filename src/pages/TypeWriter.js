import React from "react";
import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
    <Typewriter
      options={{
        strings: [
          "Quality Engineering Associate",
          "Front End Developer",
          "Back End Developer",
          "Associate Software Engineer",
          "Full-Stack Web Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default TypeWriter;
