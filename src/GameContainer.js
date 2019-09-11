import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  pauseTime,
  increaseTime,
  setTime,
  flipFirst,
  flipSecond
} from './actions/ui';

import InfoLine from './InfoLine';
import CardMatrix from './CardMatrix';

import './GameContainer.scss';

const GameContainer = props => {
  const pauseTime = props.pauseTime;

  // Unpausing time on mount
  useEffect(() => {
    pauseTime(false);
  }, [pauseTime]);

  return (
    <div className='game-container'>
      <InfoLine {...props} />
      <CardMatrix {...props} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cardCount: state.config.cardCount,
    time: state.ui.time,
    timePaused: state.ui.timePaused,
    firstFlipped: state.ui.firstFlipped,
    secondFlipped: state.ui.secondFlipped,
    found: state.ui.found
  };
};

const mapDispatchToProps = {
  setTime,
  pauseTime,
  increaseTime,
  flipFirst,
  flipSecond
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameContainer);
