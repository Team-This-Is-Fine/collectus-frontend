import { Modal, Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CollectionsForm({ collections, setCollections, setShowModal })
{
	const empty =
	{
		name: "",
		img: ""
	}

	const [newCollection, setNewCollection] = useState(empty);
	const navigate = useNavigate();

  function handleNameChange(e) {
    setNewCollection({ ...newCollection, name: e.target.value });
  }

	function handleImageChange(e)
	{
		setNewCollection({ ...newCollection, img: e.target.value });
	}

	function handleSubmit(e)
	{
		axios.post('http://localhost:8000/api/collections/', newCollection)
			.then((res) =>
			{
				setCollections([...collections, res])
			})
			.catch((error) =>
			{
				console.log(error);
			})

		setShowModal(false);
		navigate("/collections");
	}


  function handleClose() {
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
              type="text"
              onChange={handleNameChange}
              value={newCollection.name}
              required
            />
          </Form.Group>


					<Form.Group>
						<Form.Label>Image Url: </Form.Label>
						<Form.Control
							type='text'
							onChange={handleImageChange}
							value={newCollection.img}
							className="collection-image"
							required />
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
