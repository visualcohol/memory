import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { increaseTime, pauseTime } from './actions/ui';

import InfoLine from './InfoLine';
import CardMatrix from './CardMatrix';

import './GameContainer.scss';

const GameContainer = props => {
  // Starting the timer on game start
  // Creating a global interval identifier
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

  // Render

  return (
    <div className='game-container'>
      <InfoLine {...props} />
      <CardMatrix count={props.cardCount} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cardCount: state.config.cardCount,
    time: state.ui.time,
    timePaused: state.ui.timePaused
  };
};

const mapDispatchToProps = {
  increaseTime,
  pauseTime
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameContainer);
