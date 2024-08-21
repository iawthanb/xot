import React from 'react';
import LottieTimer from '../components/TimerAnimation/LottieTimer';
import TimerWidget from '../components/TimerWidget/TimerWidget';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Home = () => {
  return (
    <div className="welcome-container">
      <h1>Welcome to XOT!</h1>
      <p>
        XOT is your ultimate tool to effortlessly track your work.
        <br /> Stay organized, accurate, and boost your productivity!
      </p>
      <div className="lottie-timer">
        <LottieTimer />
      </div>
      <div className="welcome-widget">
        <p>Quickly start your work right now</p>
        <TimerWidget />
        <p>
          ... or get a better view of your work <i className="bi bi-arrow-down-square fs-5 ms-2" />
        </p>
        <Link to="/saved">
          <Button className="view-work">View your work</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
