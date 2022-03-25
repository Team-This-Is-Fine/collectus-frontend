import { Modal, Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function CollectionsForm({ collectionId, setCollectionId, setShowModal })
{
  const empty = {
    name: '',
    img: '',
  };

  // const [putId, setPutId] = useState(editId);
  const [newCollection, setNewCollection] = useState(empty);

  function handleNameChange(e)
  {
    setNewCollection({ ...newCollection, name: e.target.value });
  }

  function handleImageChange(e)
  {
    setNewCollection({ ...newCollection, img: e.target.value });
  }

  console.log(collectionId);

  function handleSubmit(e)
  {
    console.log(collectionId);
    if (!collectionId)
    {
      axios.post('https://collectus-api.herokuapp.com/api/collections/', newCollection)
        .then((res) =>
        {
          setShowModal(false);
          // navigate("/collections");
        })
    }
    else
    {
      axios.put(`https://collectus-api.herokuapp.com/api/collections/${collectionId}`, newCollection)
        .then((res) =>
        {
          setShowModal(false);
          // navigate("/collections");
        })
    }
  }

  function handleClose()
  {
    setShowModal(false);
  }

  return (
    <Modal show={true}>
      <Modal.Header>Add Collection</Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>name: </Form.Label>
            <Form.Control
              type='text'
              onChange={handleNameChange}
              value={newCollection.name}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Image Url: </Form.Label>
            <Form.Control
              type='text'
              onChange={handleImageChange}
              value={newCollection.img} />
          </Form.Group>
          <Button type='submit'>Submit</Button>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
