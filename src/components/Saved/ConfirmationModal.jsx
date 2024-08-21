import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ConfirmationModal = ({ show, handleClose, handleConfirm, title, bodyText, confirmButtonText, cancelButtonText }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{bodyText}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          {cancelButtonText || 'Cancel'}
        </Button>
        <Button variant="danger" onClick={handleConfirm}>
          {confirmButtonText || 'Delete'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmationModal;
