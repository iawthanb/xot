import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Button } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import { removeFromSaved } from '../store/Timers/actions';
import ConfirmationModal from '../components/Saved/ConfirmationModal';
import SavedTimerCard from '../components/Saved/SavedTimerCard';
import SavedTimerTable from '../components/Saved/SavedTimerTable';
import { toggleItemInArray } from '../utils/toggler';

const Saved = () => {
  const dispatch = useDispatch();
  const savedTimers = useSelector((state) => state.timer.timers);
  const [selectedTimers, setSelectedTimers] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });

  const handleSelectTimer = (timerId) => {
    setSelectedTimers((prevSelected) => toggleItemInArray(prevSelected, timerId));
  };

  const handleDelete = () => {
    dispatch(removeFromSaved(selectedTimers));
    setSelectedTimers([]);
    setShowModal(false);
  };

  return (
    <Container>
      <h2 className="mb-5">Saved Time Logs</h2>
      <p>
        <i className="bi bi-lightbulb-fill fs-5" style={{ color: '#ffc107' }} /> Find here a detailed list of your work.
      </p>
      {savedTimers.length === 0 ? (
        <div>
          <p>But first, log your work!</p>
          <Link to="/timer">
            <Button className="fs-5">Go to Timer</Button>
          </Link>
        </div>
      ) : isSmallScreen ? (
        savedTimers.map((timer, index) => <SavedTimerCard key={index} timer={timer} isSelected={selectedTimers.includes(timer.timerId)} handleSelect={handleSelectTimer} />)
      ) : (
        <SavedTimerTable savedTimers={savedTimers} selectedTimers={selectedTimers} handleSelect={handleSelectTimer} />
      )}
      {savedTimers.length > 0 && (
        <Button variant="danger" className="mb-3" disabled={selectedTimers.length === 0} onClick={() => setShowModal(true)}>
          Delete
        </Button>
      )}

      <ConfirmationModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        handleConfirm={handleDelete}
        title="Confirm Deletion"
        bodyText="Are you sure you want to delete the selected items?"
        confirmButtonText="Delete"
        cancelButtonText="Cancel"
      />
    </Container>
  );
};

export default Saved;
