import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="NFT Marketplace"
              description="Digital platform for buying, selling, and trading unique digital assets known as non-fungible tokens (NFTs).Build with Next.js, React.js, Material-UI, Tailwind CSS, Bootstrap, and Firebase. Have features like User Registration and Login, Wallet Integration, Smart Contract Integration, Bidding and Auction, Help Section and more."
              ghLink="https://github.com/shreyas-srivastava/NFT-Marketplace"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Waffle Walkers"
              description="Waffle Walkers is a Next.js and React.js-powered online waffle showcase and delivery website for a local franchise in Vellore. Built with JavaScript, CSS, and Firebase, this project provides a convenient platform for customers to browse and order from a range of delicious waffles. With its user-friendly interface and seamless functionality, Waffle Walkers makes it easy for users to order their favorite waffles and have them delivered right to their doorstep."
              ghLink="https://github.com/shreyas-srivastava/Waffle-Walkers"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Social Media Scheduling App"
              description="The Social Media Scheduling app is a project built using Next.js, React.js, JavaScript, CSS, and Firebase. It is a web application that allows users to schedule and manage their social media posts across different platforms. With an intuitive user interface, users can easily create, edit and schedule posts, and receive notifications when it's time to publish. The app is designed to streamline the social media management process and improve user efficiency."
              ghLink="https://github.com/shreyas-srivastava/social-media-scheduling-app"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Weather App"
              description="The Weather web app is a project built on Next.js, React.js, JavaScript, CSS, and Firebase. It uses the OpenWeatherMap API to provide users with real-time weather updates for any location. The app has a simple and user-friendly interface, allowing users to search for weather updates by city or current location. With its responsive design and accurate data, the Weather web app is a reliable tool for staying up-to-date on the latest weather conditions."
              ghLink="https://github.com/shreyas-srivastava/weather-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Habitus"
              description="Habitus is a web-based project built on React.js, Javascript, HTML, CSS, and firebase. It uses leaflet.js for map functionality and allows users to view selected land areas and chat about them. With its intuitive design and easy-to-use interface, Habitus is an excellent platform for users to discuss their interests and connect with others who share similar hobbies or passions. Whether it's for personal or professional use, Habitus is a great tool for anyone looking to explore and connect with like-minded individuals."
              ghLink="https://github.com/shreyas-srivastava/Habitus"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
