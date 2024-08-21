import React from 'react';
import Lottie from 'lottie-react';
import timerAnimation from './timerAnimation.json';

const LottieTimer = () => {
  return <Lottie animationData={timerAnimation} loop={true} style={{ width: 300, height: 300 }} />;
};

export default LottieTimer;
