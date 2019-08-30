export const switchOverlay = overlayVisible => ({
  type: 'OVERLAY_SWITCH',
  payload: {
    overlayVisible
  }
});

export const increaseTime = () => ({
  type: 'INCREASE_TIME'
});

export const pauseTime = pause => ({
  type: 'PAUSE_TIME',
  payload: {
    pause: pause
  }
});
