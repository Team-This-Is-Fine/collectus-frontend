import { Modal, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ItemsForm({ id, items, setItems, setShowModal }) {
  const [newItem, setNewItem] = useState({
    name: "",
    img: "",
    description: "",
    duplicates: 0,
  });
  const navigate = useNavigate();

	function handleNameChange(e) {
		setNewItem({ ...newItem, name: e.target.value });
	}

	function handleImageChange(e) {
		setNewItem({ ...newItem, img: e.target.value });
	}

	function handleDescriptionChange(e) {
		setNewItem({ ...newItem, description: e.target.value });
	}

	function handleDuplicatesChange(e) {
		setNewItem({ ...newItem, duplicates: e.target.value });
	}

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(id);
    axios
      .post(`http://localhost:8000/api/items/collections/${id}`, newItem)
      .then((res) => {
        setItems([...items, res]);
      }).then (() => {
        navigate(`/collections/${id}`)
      })
      .catch((error) => {
        console.log(error);
      });

		setShowModal(false);
		// navigate(`/collections/${id}`);
	}

	function handleClose() {
		setShowModal(false);
	}

	return (
		<Modal show={true}>
			<Modal.Header>Add Item</Modal.Header>

			<Modal.Body>
				<Form onSubmit={handleSubmit}>
					<Form.Group>
						<Form.Label>Name: </Form.Label>
						<Form.Control
							type='text'
							onChange={handleNameChange}
							value={newItem.name}
							required
						/>
					</Form.Group>

					<Form.Group>
						<Form.Label>Image Url: </Form.Label>
						<Form.Control
							type='text'
							onChange={handleImageChange}
							value={newItem.img}
							className='collection-image'
							required
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Description: </Form.Label>
						<Form.Control
							type='text'
							onChange={handleDescriptionChange}
							value={newItem.description}
							className='item-description'
							required
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Duplicates</Form.Label>
						<Form.Control
							type='number'
							onChange={handleDuplicatesChange}
							value={newItem.duplicates}
							className='item-duplicates'
							required
						/>
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
