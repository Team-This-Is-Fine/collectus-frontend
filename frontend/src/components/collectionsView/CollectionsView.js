import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, Col, Row, Button } from 'react-bootstrap';
import './CollectionsView.css';
import axios from 'axios';
import CollectionsForm from '../collectionsForm/CollectionsForm';

// Handles how collections are rendered.
export default function CollectionsView({ collections, collectionId, setCollectionId, showModal, setShowModal })
{
  const navigate = useNavigate();
  function handleDelete(id)
  {
    const confirm = window.confirm("Are you sure you want to delete?");

    if (confirm)
    {
      axios.delete(`http://localhost:8000/api/collections/${id}`)
        .then(() =>
        {
          navigate("/collections");
        });
    }
  }

  function handleEdit(id)
  {
    setShowModal(true);
    setCollectionId(id);
  }
  console.log(collectionId);

  return (
    <div className='card-container'>
      <Row xs={1} md={2} lg={3} xl={4} className='g-4'>
        {collections.map((element) =>
        {
          return (
            <Col key={element._id}>
              <Card className='h-100'>
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
                    <Button variant='outline-dark'>
                      View Collection
                    </Button>
                  </Link>

                  <Button
                    variant='outline-dark'
                    onClick={() => handleEdit(element._id)}>
                    Edit Collection
                  </Button>

                  <Link to={`/`}>
                    <Button
                      variant='outline-dark'
                      onClick={() => handleDelete(element._id)}>
                      Delete Collection
                    </Button>
                  </Link>
                </Card.Footer>
              </Card>
            </Col>
          );
        })}
      </Row>
      {showModal &&
        <CollectionsForm
          setShowModal={setShowModal}
          collectionId={collectionId}
        />
      }
    </div >
  );
}
