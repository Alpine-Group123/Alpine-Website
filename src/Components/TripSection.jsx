import TripCard from "./TripCard";
import { Container, Row, Col, Button } from "react-bootstrap";
import IMount from "../assets/images/Hiker2.jpg";
import Hiker from "../assets/images/Hiker.jpg";
/**
 * The `TripsSection` component displays a section showcasing the latest trips.
 * It includes a list of trip cards and a section with informational text and a call-to-action button.
 *
 * @component
 * @returns {JSX.Element} The rendered TripsSection component.
 *
 * @example
 * <TripsSection />
 *
 * @description
 * The component renders:
 * - A list of trip cards, each displaying details such as image, price, days, difficulty, title, description, and location.
 * - A section with a title, descriptive text, and a button to encourage users to join the trips.
 *
 * The `trips` array contains the data for each trip, which is passed as props to the `TripCard` component.
 */
const TripsSection = () => {
  const trips = [
    {
      image: IMount,
      price: 49,
      days: "3",
      difficulty: "Easy",
      title: "Bianco Excursion",
      description:
        "Monte Bianco is a mountain located in deep nature and rivers.",
      location: "Monte Bianco, Alpes, Italy",
    },
    {
      image: Hiker,
      price: 49,
      days: "5",
      difficulty: "Medium",
      title: "Civetta Trekking",
      description:
        "Civetta is a mountain located in Alps and is one of the most famous.",
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
          <h1 className="my-4 pt-5 text-primary fw-bold">LATEST TRIPS</h1>
          <p className="text-muted">Explore the unexplored world</p>
          <p className="text-muted">
            Here are the latest trips which we are about to embark. You can join
            us.
          </p>
          <Button variant="primary" href="#newsletter">
            Join us now
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default TripsSection;
