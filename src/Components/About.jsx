import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion, Button } from "react-bootstrap";

const About = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="container text-center py-5"
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "white",
        paddingTop: "100px",
      }}
    >
      {/* Section Title */}
      <h2 className="fw-bold text-primary">ABOUT US</h2>
      <p className="text-muted">
        We live for the nature
      </p>

      {/* 2 Column Flex Grid */}
      <div className="row my-4 d-flex justify-content-center me-1 ms-1 py-5">
        <div className="col-md-6 text-start">
          <p 
            className="fs-6" 
            style={{ 
              fontSize: "clamp(0.8rem, 1.2vw, 1rem)", 
              maxHeight: expanded ? "none" : "10em", 
              overflow: "hidden" 
            }}
          >
            Welcome to Alpines Crescent, your ultimate resource for all things
            mountaineering and climbing. Whether you're an experienced climber
            pushing your limits or a beginner taking your first steps toward the
            summit, we are here to provide you with essential knowledge, expert
            techniques, and valuable insights into the world of mountaineering.
            <br />
            <strong>What We Offer</strong>
            <br />
            Mountaineering is more than just a sport—it’s an adventure that
            requires skill, endurance, and deep respect for nature. Our platform
            is dedicated to offering <em>detailed, well-researched information</em>
            covering every aspect of mountaineering, including:
          </p>
          <div className="d-flex align-items-center">
            <Button variant="primary" className="px-4 py-2">History</Button>
            <a 
              href="#read-more" 
              className="ms-3 text-primary text-decoration-none"
              onClick={(e) => {
                e.preventDefault();
                setExpanded(!expanded);
              }}
            >
              {expanded ? "Show less" : "Read more"}
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Our mountains and our location</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam quis nostrud exercitation.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>About our treks and trips</Accordion.Header>
              <Accordion.Body>
                Information about our treks and trips goes here.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>About our team and guests</Accordion.Header>
              <Accordion.Body>
                Details about our team and guests will be placed here.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default About;
