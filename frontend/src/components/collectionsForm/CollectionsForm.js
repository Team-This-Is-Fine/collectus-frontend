import { Modal, Form, Button } from 'react-bootstrap';
import { useState } from 'react';

export default function CollectionsForm({ showModal, setShowModal }) {
	const [name, setname] = useState('');
	const [url, seturl] = useState('');

	function handleChange(e) {
		setname([e.target.value]);
	}
	function handleClose() {
		setShowModal(!showModal);
	}
	return (
		<Modal show={showModal}>
			<Modal.Header>Add Collection</Modal.Header>
			<Modal.Body>
				<Form.Group>
					<Form.Label>name: </Form.Label>
					<Form.Control type='text' onChange={handleChange} value={name} />
				</Form.Group>
			</Modal.Body>
			<Modal.Footer>
				{<Button onClick={handleClose}>Close</Button>}
			</Modal.Footer>
		</Modal>
	);
}
