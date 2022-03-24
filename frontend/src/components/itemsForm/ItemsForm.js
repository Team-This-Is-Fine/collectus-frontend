import React from "react";
import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

export default function ItemsForms({ id }) {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = React.useState(false);
  const [itemCreate, setItemCreate] = useState({
    name: "",
    img: "",
    description: "",
    duplicatates: 0,
  });

  const handleChange = (event) => {
    setItemCreate({ ...itemCreate, [event.target.id]: event.target.value });
  };

  const handleClose = () => {
    setModalShow(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`http://localhost:8000/collections/${id}`, itemCreate)
      .then((res) => {
        navigate(`/collections/${id}`);
      });
  };

  return (
    <Modal
      show={modalShow}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit} className="create-item-form">
          <label htmlFor="Name"> Name: </label>
          <input
            onChange={handleChange}
            id="item"
            value={itemCreate.name}
            placeholder="Name"
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
