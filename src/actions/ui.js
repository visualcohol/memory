export const switchOverlay = overlayVisible => ({
  type: 'OVERLAY_SWITCH',
  payload: {
    overlayVisible
  }
});

export const increaseTime = () => ({
  type: 'INCREASE_TIME'
});

export const setTimeInterval = interval => ({
  type: 'SET_TIME_INTERVAL',
  payload: {
    interval
  }
});
