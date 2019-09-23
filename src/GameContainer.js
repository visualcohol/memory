import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setCards, switchOverlay } from './actions/ui';
import { useMatches } from './hooks/useMatches';
import { Link } from 'react-router-dom';

import InfoLine from './InfoLine';
import CardMatrix from './CardMatrix';
import Button from './Button';

import './GameContainer.scss';

const GameContainer = props => {
  const matches = useMatches(props.cards);
  const propsCardCount = props.cardCount;
  const propsSwitchOverlay = props.switchOverlay;

  useEffect(() => {
    // On every card change we check if game is finished
    if (matches.length === propsCardCount) {
      const overlaytext = (
        <div>
          <h1>You are awesome!</h1>
          <h3 className='ad'>You found all the pairs!</h3>
          <Link to='/'>
            <Button text='Play again' />
          </Link>
        </div>
      );

      propsSwitchOverlay({
        visible: true,
        content: overlaytext,
        effect: 'confetti',
        timeout: 1000
      });
    }
  }, [matches, propsCardCount, propsSwitchOverlay]);

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
  setCards,
  switchOverlay
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameContainer);
