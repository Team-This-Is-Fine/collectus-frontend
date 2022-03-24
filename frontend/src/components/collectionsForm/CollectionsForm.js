import { Modal, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CollectionsForm({ showModal, setShowModal })
{
	const [name, setname] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const navigate = useNavigate();

	function handleNameChange(e)
	{
		setname(e.target.value);
	}

	function handleImageChange(e)
	{
		setImageUrl(e.target.value);
	}

	function handleSubmit(e)
	{
		e.preventDefault();

		const newCollection =
		{
			'name': { name },
			'img': { imageUrl },
			'item': [],
			'collectionSize': this.item.length
		};

		axios.post('http://localhost:8000/api/collections/', newCollection)
			.then((response) =>
			{
				console.log(response);
				navigate("/collections");
			})
			.catch((error) =>
			{
				console.log(error);
			})

		setShowModal(false);
	}

	function handleClose()
	{
		setShowModal(false);
	}

	return (
		<Modal show={true}>
			<Modal.Header>Add Collection</Modal.Header>

			<Modal.Body>
				<Form.Group>
					<Form.Label>name: </Form.Label>
					<Form.Control
						type='text'
						onChange={handleNameChange}
						value={name}
						required
					/>
				</Form.Group>

				<Form.Group>
					<Form.Label>Image Url: </Form.Label>
					<Form.Control
						type='text'
						onChange={handleImageChange}
						value={imageUrl}
						className="collection-image"
						required />
				</Form.Group>
			</Modal.Body>

			<Modal.Footer>
				<Button variant="primary" onClick={handleSubmit}>Submit</Button>
				<Button onClick={handleClose}>Close</Button>

			</Modal.Footer>
		</Modal>
	);
}