import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shreyas Srivastava </span>
            from <span className="purple"> Vellore, India.</span>
            <br />I'm a driven and accomplished junior at VIT, Vellore with experience in various areas of technology.
            <br />
            I'm currently working as a Research Intern at Samsung Prism
            <br />
            <br />
            With experience as a Full Stack Developer Intern at DorkLab, a Summer Intern at Applore Technologies, and as an Editorial Head and Core Committee Member at the Institute of Industrial and Systems Engineers, I have honed my skills in MERN Stack, Next.js, Node.js, React.js, and more
          </p>
          

          <p style={{ color: "rgb(155 126 172)" }}>
            "Here to make an impact"{" "}
          </p>
          <footer className="blockquote-footer">Shreyas</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
