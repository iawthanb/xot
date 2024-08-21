import React from 'react';
import { Button, Card } from 'react-bootstrap';

const TimerDisplay = ({ seconds, isActive, startTimer, stopTimer, resetTimer, handleShowModal, formatTime }) => {
  return (
    <Card className="timer-widget">
      <Card.Body>
        <h3>Automated Log Work</h3>
        <div className="timer-display">{formatTime(seconds)}</div>
        {!isActive && seconds > 0 && (
          <Button onClick={resetTimer} className="reset-button">
            Reset
          </Button>
        )}
        <Button onClick={isActive ? stopTimer : startTimer} className="timer-button">
          {isActive ? 'Stop' : 'Start'}
        </Button>
        {!isActive && seconds > 0 && (
          <Button onClick={handleShowModal} className="save-button">
            Log
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default TimerDisplay;
