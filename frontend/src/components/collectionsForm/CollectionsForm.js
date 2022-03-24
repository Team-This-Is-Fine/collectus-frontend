import { Modal, Form, Button } from 'react-bootstrap';

export default function CollectionsForm()
{
  return (
    <Modal>
      <Modal.Header>Add Collection</Modal.Header>
      <Modal.Body>
        <Form.Group>
          <Form.Label>Name: </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>Image Url: </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>Name: </Form.Label>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onCLick={handleSubmit}>Submit</Button> */}
      </Modal.Footer>
    </Modal>
  )
}