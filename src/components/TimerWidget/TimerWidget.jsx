import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useTimer } from '../../hooks/useTimer';
import TimerDisplay from './TimerDisplay';
import LogTimeModal from './LogTimeModal';
import NotificationToast from '../NotificationToast';
import { useDispatch } from 'react-redux';
import { addToSaved } from '../../store/Timers/actions';

const TimerWidget = () => {
  const [showToast, setShowToast] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [description, setDescription] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const dispatch = useDispatch();

  const { seconds, isActive, startTimer, stopTimer, resetTimer, formatTime } = useTimer(() => {
    setShowModal(true);
  });

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleNotification = () => {
    setShowToast(true);
  };

  const handleModalSave = () => {
    dispatch(addToSaved({ description, tag: selectedTag, seconds }));
    setShowModal(false);
    resetTimer();
    handleNotification();
  };

  return (
    <>
      <Row className="justify-content-center">
        <Col xs={12} sm={8} md={6} lg={4}>
          <TimerDisplay seconds={seconds} isActive={isActive} startTimer={startTimer} stopTimer={stopTimer} resetTimer={resetTimer} handleShowModal={handleShowModal} formatTime={formatTime} />
        </Col>
      </Row>
      <LogTimeModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        handleModalSave={handleModalSave}
        description={description}
        setDescription={setDescription}
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
        formatTime={formatTime}
        seconds={seconds}
      />
      <NotificationToast showToast={showToast} setShowToast={setShowToast} message="Time saved successfully!" navigateTo="/saved" />
    </>
  );
};

export default TimerWidget;
