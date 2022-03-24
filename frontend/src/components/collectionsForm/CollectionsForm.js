import { Modal, Form, Button } from 'react-bootstrap';
import { useState } from 'react';

export default function CollectionsForm({ showModal })
{
	const [name, setname] = useState('');
	const [imageUrl, setImageUrl] = useState('');

	function handleChange(e)
	{
		console.log(e);
		console.log(e.target);
		setname(e.target.value);
	}

	function handleClose()
	{
		setShowModal(false);
	}

	// const handleClose = () => setShowModal(false);

	return (
		<Modal show={true} onHide={handleClose}>
			<Modal.Header>Add Collection</Modal.Header>

			<Modal.Body>
				<Form.Group>
					<Form.Label>name: </Form.Label>
					<Form.Control
						type='text'
						onChange={handleChange}
						value={name}
					/>
				</Form.Group>

				<Form.Group>
					<Form.Label>Image Url: </Form.Label>
					<Form.Control
						type='text'
						onChange={handleChange}
						value={imageUrl}
						className="collection-image" />
				</Form.Group>
			</Modal.Body>

			<Modal.Footer>
				<Button onClick={this.handleClose}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}