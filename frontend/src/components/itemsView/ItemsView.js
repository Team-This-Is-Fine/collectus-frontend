import { Card, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// Handles how items are rendered.
export default function ItemsView({ collectionItems }) {
  return (
    <div className="card-container">
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {collectionItems.map((item) => {
          return (
            <Col key={item._id}>
              <Card className="h-100">
                {item.img && (
                  <Card.Img
                    variant="top"
                    src={item.img ? item.img : ""}
                    alt={item.name}
                  />
                )}
                <Card.Body>
                  {item.img ? "" : <Card.Title>No Image Available</Card.Title>}
                  <Card.Text className="text-muted">{item.name}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Link to={`/items/${item._id}`}>
                    <Button variant="outline-dark">Details</Button>
                  </Link>
                </Card.Footer>
              </Card>
            </Col>
          );
        })}
        {/* {(activeItem || error) && (
        <Detail
          objectDetail={activeItem}
          show={show}
          handleClose={handleClose}
          error={error}
        />
      )} */}
      </Row>
    </div>
  );
}
