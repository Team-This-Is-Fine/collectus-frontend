import axios from "axios";
import { Card, Col, Row, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";


export default function ItemsView({ items, id }) {

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
                  <Card.Text className="text-muted">{item.name}</Card.Text>
                </Card.Body>
                <Card.Footer>
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
