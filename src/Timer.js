import { useEffect } from 'react';

const Timer = props => {
  // Managing a global timer on game start

  const increaseTime = props.increaseTime;
  const timePaused = props.timePaused;

  useEffect(() => {
    const interval = setInterval(() => {
      if (!timePaused) increaseTime();
    }, 1000);

    return function cleanup() {
      clearInterval(interval);
    };
  }, [increaseTime, timePaused]);

  return null;
};

export default Timer;
