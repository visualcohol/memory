import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setCards } from './actions/ui';
import { useMatches } from './hooks/useMatches';

import InfoLine from './InfoLine';
import CardMatrix from './CardMatrix';

import './GameContainer.scss';

const GameContainer = props => {
  const matches = useMatches(props.cards);

  useEffect(() => {
    // On every card change we check if game is finished
    if (matches.length === props.cardCount) {
      console.log('you won');
    }
  }, [matches, props.cardCount]);

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
    cards: state.ui.cards
  };
};

const mapDispatchToProps = {
  setCards
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameContainer);
