import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Row, Col } from "react-bootstrap";

const Guidelines = () => {
  return (
    <Container className="mt-4">
      <h2 className="text-center text-primary mb-4">Mountaineering Guidelines</h2>

      {/* Rules & Regulations */}
      <section className="mb-5 lh-lg">
        <h3>Rules & Regulations</h3>
        <p>To ensure safety and environmental conservation, all climbers must follow these rules:</p>

        <h5>Permits & Documentation</h5>
        <ul>
          <li>Obtain necessary climbing permits from local authorities.</li>
          <li>Register at the base camp before the ascent.</li>
        </ul>

        <h5>Environmental Protection</h5>
        <ul>
          <li>Follow the "Leave No Trace" principles.</li>
          <li>Avoid disturbing wildlife and natural habitats.</li>
        </ul>

        <h5>Safety Regulations</h5>
        <ul>
          <li>Climbing solo is discouraged; always go in a team.</li>
          <li>Carry proper emergency gear and first aid kits.</li>
          <li>Check weather forecasts before climbing.</li>
        </ul>

        <h5>Restricted Areas</h5>
        <ul>
          <li>Some regions may be off-limits due to conservation efforts.</li>
          <li>Respect local customs and indigenous communities.</li>
        </ul>
      </section>

      {/* Tools & Materials */}
      <section>
        <h3>Essential Tools & Materials</h3>
        <p>Before embarking on a climb, ensure you have the following essential gear:</p>

        <Row className="g-4">
          {/* Item 1 */}
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="" alt="Climbing Boots" />
              <Card.Body>
                <Card.Title>Climbing Boots</Card.Title>
                <Card.Text>Insulated, waterproof, and designed for high-altitude trekking.</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Item 2 */}
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="" alt="Climbing Harness" />
              <Card.Body>
                <Card.Title>Climbing Harness</Card.Title>
                <Card.Text>Provides safety and support when using ropes and anchors.</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Item 3 */}
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="" alt="Climbing Helmet" />
              <Card.Body>
                <Card.Title>Climbing Helmet</Card.Title>
                <Card.Text>Protects against falling debris and head injuries.</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Item 4 */}
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/300x200?text=Ice+Ax" alt="Ice Axe" />
              <Card.Body>
                <Card.Title>Ice Axe</Card.Title>
                <Card.Text>Used for stability, self-arrest, and climbing icy slopes.</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Item 5 */}
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/300x200?text=Ropes" alt="Climbing Ropes" />
              <Card.Body>
                <Card.Title>Climbing Ropes</Card.Title>
                <Card.Text>Essential for belaying, rappelling, and securing climbers.</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Item 6 */}
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/300x200?text=Tent" alt="Mountaineering Tent" />
              <Card.Body>
                <Card.Title>Mountaineering Tent</Card.Title>
                <Card.Text>Four-season tent designed for extreme weather conditions.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Guidelines;