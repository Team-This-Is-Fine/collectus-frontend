import { Modal, Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function CollectionEditForm({ editId })
{
  // const [putId, setPutId] = useState(editId);
  const [newCollection, setNewCollection] = useState();

  function handleNameChange(e)
  {
    setNewCollection({ ...newCollection, name: e.target.value });
  }

  function handleImageChange(e)
  {
    setNewCollection({ ...newCollection, img: e.target.value });
  }

  function handleSubmit()
  {

  }

  return (
    <Modal show={true}>
      <Modal.Header>Edit Collection</Modal.Header>

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
          <Button type="submit">Submit</Button>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}