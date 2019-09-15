import React from 'react';
import { navigate } from '@reach/router';
import { connect } from 'react-redux';

import './InfoLine.scss';

const InfoLine = props => {
  return (
    <div className='info-line-component'>
      <div className='left'>
        Found {matchesFound(props.cards) / 2} pairs out of {props.cardCount / 2}{' '}
        <br />
        <small>You flipped 6 cards to get there</small>
      </div>
      <div className='right'>
        <div className='new-game link' onClick={newGame}>
          New game
        </div>
      </div>
    </div>
  );

  function newGame() {
    navigate('/');
  }

  function matchesFound(cards) {
    const matchedCards = cards.filter(elem => {
      return elem.matched === true;
    });

    return matchedCards.length;
  }
};

const mapStateToProps = state => {
  return {
    cards: state.ui.cards
  };
};

export default connect(mapStateToProps)(InfoLine);
