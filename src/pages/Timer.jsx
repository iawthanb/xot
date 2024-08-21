import React, { useState } from 'react';
import TimerWidget from '../components/TimerWidget/TimerWidget';
import FocusMode from '../components/FocusMode';
import { Button } from 'react-bootstrap';
import Checklist from '../components/Checklist';

const Timer = () => {
  const [focusMode, setFocusMode] = useState(false);
  const [tasks, setTasks] = useState([]);

  const handleEnterFocusMode = () => setFocusMode(true);
  const handleExitFocusMode = () => setFocusMode(false);

  return (
      {focusMode ? (
        <FocusMode onExit={handleExitFocusMode} />
      ) : (
        <>
          <h1>Time to Log!</h1>
          <p>Stay focused and productive.</p>

          <Checklist tasks={tasks} setTasks={setTasks} className="my-5" />
          <div className="lottie-timer mt-5">
            <TimerWidget />
          </div>
          <Button variant="dark" onClick={handleEnterFocusMode} className="my-5">
            Enter Focus Mode
          </Button>
        </>
      )}
  );
};

export default Timer;
