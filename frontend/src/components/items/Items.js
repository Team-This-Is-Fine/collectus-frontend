import ItemsView from "../ItemsView/ItemsView";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ItemsForm from "../ItemsForm/ItemsForm";
import React from "react";
import { Button, Modal } from "react-bootstrap";

// Items in a collection.
export default function Items() {
  const { id } = useParams();
  const [collectionItems, setCollectionItems] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);

  const handleClose = () => {
    setModalShow(false);
  };

  const handleShow = () => {
    setModalShow(true);
  };

  // Handles axios call on mount.
  useEffect(() => {
    axios.get(`http://localhost:8000/api/collections/${id}`).then((res) => {
      setCollectionItems([...res.data.item]);
    });
  }, []);

  // Handles no items.
  if (!collectionItems.length) {
    return "Loading";
  }

  return (
    <div className="items-container">
      <ItemsView collectionItems={collectionItems} />
      {/* <Link to={`/items/add-`}> */}
      <Button variant="primary" onClick={handleShow}>
        Add Item
      </Button>
      <Modal
        show={modalShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ItemsForm />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
      {/* </Link> */}
    </div>
  );
}
