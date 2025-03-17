import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion, Button } from "react-bootstrap";

const About = () => {
  return (
    <div className="container text-center py-5 ">
      {/* Section Title */}
      <h2 className="fw-bold text-primary">ABOUT US</h2>
      <p className="text-muted">We live for the nature</p>
      
      {/* 3 Column Flex Grid */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start my-4 gap-4">
        <div className="col-md-4 text-start">
          <p className="text fs-6 ">
            Welcome to Alpines Crescent, your ultimate resource for all things mountaineering and climbing. 
            Whether you're an experienced climber pushing your limits or a beginner taking your first steps toward the summit, we are here to provide you with essential knowledge, 
            expert techniques, and valuable insights into the world of mountaineering.  

             *What We Offer*  
            Mountaineering is more than just a sport—it’s an adventure that requires skill, 
            endurance, and deep respect for nature. Our platform is dedicated to offering *detailed, well-researched information*
             covering every aspect of mountaineering, including:  



          </p>
          <Button variant="primary" className="d-flex align-items-center px-4 py-2 mt-3">
            History
          </Button>
        </div>
        <div className="col-md-4 text-start">
          <p>
            Lorem ipsum dolor sit amet consectetur tsed elitectur adipiscing elit sed doLorem ipsum dolor sit amet consectetur
            adipiscing el adipiscing sascing elit sed do esec adipiscing elit sede do.
          </p>
        </div>
        <div className="col-md-4">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Our mountains and our location</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim
                veniam quis nostrud exercitation.
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
