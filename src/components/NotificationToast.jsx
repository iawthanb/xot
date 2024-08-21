import React from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NotificationToast = ({ showToast, setShowToast, message, navigateTo }) => {
  const navigate = useNavigate();

  const handleToastClick = () => {
    setShowToast(false);
    if (navigateTo) {
      navigate(navigateTo);
    }
  };

  return (
    <ToastContainer className="p-3" position="top-end">
      <Toast onClose={() => setShowToast(false)} show={showToast} delay={6000} autohide onClick={handleToastClick} style={{ cursor: 'pointer' }}>
        <Toast.Header closeButton>
          <strong className="me-auto">Notification</strong>
          <small>Just now</small>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default NotificationToast;
