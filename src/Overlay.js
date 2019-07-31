import React from 'react';
import { connect } from 'react-redux';
import { switchOverlay } from './actions/ui';

import './Overlay.scss';

const Overlay = props => {
  return (
    <div
      className={['overlay', props.overlayVisible ? ' visible' : null].join('')}
      onClick={() => (props.overlayVisible ? props.switchOverlay(false) : null)}
    />
  );
};

const mapStateToProps = state => ({
  overlayVisible: state.ui.overlayVisible
});

const mapDispatchToProps = {
  switchOverlay
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Overlay);
