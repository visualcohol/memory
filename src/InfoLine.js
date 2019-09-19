import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './InfoLine.scss';

const InfoLine = props => {
  return (
    <div className='info-line-component'>
      <div className='left'>
        Found {matchesFound(props.cards) / 2} pairs out of {props.cardCount / 2}{' '}
        <br />
        {/* <small>You flipped 6 cards to get there</small> */}
      </div>
      <div className='right'>
        <Link to='/'>
          <div className='new-game link'>New game</div>
        </Link>
      </div>
    </div>
  );

  // function newGame() {
  //   navigate('/');
  // }

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
