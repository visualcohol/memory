import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { switchOverlay } from './actions/ui';
import * as Confetti from 'canvas-confetti';

import './Overlay.scss';

const Overlay = props => {
  const textRef = useRef(null);

  useEffect(() => {
    // Confetti effect
    if (props.config.visible === true && props.config.effect === 'confetti') {
      const canvas = textRef.current;
      canvas.width = canvas.scrollWidth;
      canvas.height = canvas.scrollHeight;

      var myConfetti = Confetti.create(canvas);

      setTimeout(() => {
        myConfetti({
          particleCount: 100,
          spread: 160
        });
      }, 500);
    }
  }, [props]);

  return (
    <div
      className={[
        'overlay-component',
        props.config.visible ? ' visible' : null
      ].join('')}
      onClick={() =>
        props.config.visible ? props.switchOverlay({ visible: false }) : null
      }>
      <div className='content'>
        {props.config.content}
        <canvas ref={textRef}></canvas>
      </div>
      <div className='overlay' />
    </div>
  );
};

const mapStateToProps = state => ({
  config: state.ui.overlay
});

const mapDispatchToProps = {
  switchOverlay
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Overlay);
