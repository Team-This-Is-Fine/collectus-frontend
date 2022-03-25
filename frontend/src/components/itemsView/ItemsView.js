
import { React, useEffect, useState } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import ItemDetails from "../itemDetails/ItemDetails";






export default function ItemsView({ items, id }) {
  // const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  function handleDelete(itemId)
  {
    const confirm = window.confirm("are you sure you want to delete?");
    if (confirm)
    {
      axios.delete(`http://localhost:8000/api/items/collections/${id}/${itemId}`)
      window.location.reload("true");
  }
}

  return (
    <div className="card-container">
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {items.map((item) => {
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
                  <Card.Text className="text-muted">
                    Name: {item.name}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>

                  <Card.Text className="text-muted">
                    Description: {item.description}
                  </Card.Text>
                  <Card.Text className="text-muted">
                    Duplicates: {item.duplicates}
                  </Card.Text>

                  <Link to={`/items/${item.id}`}>
                    <Button variant="outline-dark">Details</Button>
                  </Link>
                  <Link to={`/collections/${id}`}>
                  <Button variant='outline-dark' onClick={() => handleDelete(item._id)}>
                    Delete
                  </Button>
                  </Link>

                </Card.Footer>
              </Card>
            </Col>
          );
        })}
      
      </Row>
    </div>
  );
}
