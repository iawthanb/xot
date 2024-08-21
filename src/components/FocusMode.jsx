import React from 'react';
import { Button } from 'react-bootstrap';
import { radioUrl } from '../api/endpoints';

const FocusMode = ({ onExit }) => {
  return (
    <div className="focus-mode d-flex flex-column justify-content-center align-items-center vh-100 bg-dark text-white">
      <h2 className="h1 fw-bold mb-3">Focus Mode</h2>
      <p>Listen some live radio while kepping it productive!</p>
      <audio controls autoPlay className="xot-audio-player">
        <source src={radioUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <Button variant="danger" className="mt-5" onClick={onExit}>
        Exit Focus Mode
      </Button>
    </div>
  );
};

export default FocusMode;
