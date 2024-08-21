import React from 'react';
import { Modal, Form, Button, Badge } from 'react-bootstrap';
import { generateUniqueId } from '../../utils/getUniqueId';

const LogTimeModal = ({ showModal, handleCloseModal, handleModalSave, description, setDescription, selectedTag, setSelectedTag, formatTime, seconds }) => {
  const tagOptions = [
    {
      label: (
        <Badge bg="warning" text="dark">
          #WIP
        </Badge>
      ),
      value: 'WIP',
    },
    { label: <Badge bg="info">#todo</Badge>, value: 'todo' },
    { label: <Badge bg="success">#done</Badge>, value: 'done' },
    { label: <Badge bg="secondary">#others</Badge>, value: 'others' },
  ];

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Log Time Entry</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>You worked for {formatTime(seconds)}. Go ahead and add some info.</p>
        <Form>
          <Form.Group controlId={generateUniqueId('description')}>
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Enter description" value={description} onChange={(e) => setDescription(e.target.value)} />
          </Form.Group>

          <Form.Group className="mt-3">
            <Form.Label>Select Tag</Form.Label>
            {tagOptions.map((tag) => (
              <Form.Check
                key={tag.value}
                type="radio"
                id={generateUniqueId('tag', tag.value)}
                label={tag.label}
                value={tag.value}
                checked={selectedTag === tag.value}
                onChange={(e) => setSelectedTag(e.target.value)}
              />
            ))}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleModalSave}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LogTimeModal;
