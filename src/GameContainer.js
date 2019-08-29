import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { increaseTime, setTimeInterval } from './actions/ui';

import InfoLine from './InfoLine';
import CardMatrix from './CardMatrix';

import './GameContainer.scss';

const GameContainer = props => {
  // Starting the timer on game start
  // Creating a global interval identifier

  const increaseTime = props.increaseTime;
  const setTimeInterval = props.setTimeInterval;

  useEffect(() => {
    const interval = setInterval(() => {
      increaseTime();
    }, 1000);

    setTimeInterval(interval);

    return function cleanup() {
      clearInterval(interval);
      setTimeInterval(null);
    };
  }, [increaseTime, setTimeInterval]);

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
    timeInterval: state.ui.timeInterval,
    time: state.ui.time
  };
};

const mapDispatchToProps = {
  increaseTime,
  setTimeInterval
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameContainer);
