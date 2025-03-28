import TripCard from "./TripCard";
import { Container, Row, Col, Button } from "react-bootstrap";
import IMount from "../assets/images/Hiker2.jpg";
import Hiker from "../assets/images/Hiker.jpg";
const TripsSection = () => {
  const trips = [
    {
      image: IMount,
      price: 49,
      days: "3",
      difficulty: "Easy",
      title: "Bianco Excursion",
      description: "Monte Bianco is a mountain located in deep nature and rivers.",
      location: "Monte Bianco, Alpes, Italy",
    },
    {
      image: Hiker,
      price: 49,
      days: "5",
      difficulty: "Medium",
      title: "Civetta Trekking",
      description: "Civetta is a mountain located in Alps and is one of the most famous.",
      location: "Civetta, Alpes, Italy",
    },
  ];

  return (
    <Container className="py-5">
      <Row>
        {/* Trip Cards */}
        <Col md={8} className="d-flex gap-4">
          {trips.map((trip, index) => (
            <TripCard key={index} {...trip} />
          ))}
        </Col>

        {/* Section Info */}
        <Col md={4} className="text-start my-5">
          <h2 className="text-primary">LATEST TRIPS</h2>
          <p className="text-muted">Explore the unexplored world</p>
          <p className="text-muted">
            Here are the latest trips which we are about to embark. You can join us.
          </p>
          <Button variant="primary">
             <a href="#newsletter" className="link">Join us now</a>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default TripsSection;
