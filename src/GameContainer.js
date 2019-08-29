import React from 'react';
import { connect } from 'react-redux';

import CardMatrix from './CardMatrix';

import './GameContainer.scss';

const GameContainer = props => {
  return (
    <div className='game-container'>
      <div className='info'>info</div>
      <CardMatrix count={props.cardCount} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cardCount: state.config.cardCount
  };
};

export default connect(mapStateToProps)(GameContainer);
