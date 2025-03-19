import { Card } from "react-bootstrap";

const TripCard = ({ image, price, days, difficulty, title, description, location }) => {
  return (
    <Card className="shadow-sm my-5">
      {/* Image on top of the card */}
      <div className="position-relative">
        <Card.Img variant="top" src={image} alt={title} style={{height: "400px", objectFit: "cover"}} />
        {/* Badge overlay  */}
        <div className="position-absolute top-0 start-0 bg-primary text-white px-3 py-1 rounded">
          FROM ${price}
        </div>
      </div>
      <Card.Body className="p-2">
        <div className="bg-dark text-white d-flex justify-content-between p-2">
          <span>{days}</span>
          <span>{difficulty}</span>
        </div>
        <Card.Title className="mt-3 fw-bold">{title}</Card.Title>
        <Card.Text className="text-muted">{description}</Card.Text>
        <p className="text-primary">
          <i className="bi bi-geo-alt"></i> {location}
        </p>
      </Card.Body>
    </Card>
  );
};

export default TripCard;