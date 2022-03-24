import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row, Button } from 'react-bootstrap';
import './CollectionsView.css';

export default function CollectionsView({ collections, handleCollectionClick })
{
  return (
    <div className="card-container">
      <Row xs={1} md={2} lg={3} xl={4} className='g-4' >
        {collections.map((element) =>
        {
          return (
            <Col key={element.id} >
              <Card
                className='h-100' key={element.id}>
                {element.img && (
                  <Card.Img
                    variant='top'
                    src={element.img ? element.img : ''}
                    alt={element.name}
                  />
                )}
                <Card.Body>
                  {element.img ? (
                    ''
                  ) : (
                    <Card.Title>No Image Available</Card.Title>
                  )}
                  <Card.Text className='text-muted'>{element.name}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Link to={`/collections/${element._id}`}>
                    <Button
                      // onClick={handleCollectionClick}
                      variant='outline-dark'>
                      View Collection
                    </Button>
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
    </div >
  );
}
