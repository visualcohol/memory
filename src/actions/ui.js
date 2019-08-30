export const switchOverlay = overlayVisible => ({
  type: 'OVERLAY_SWITCH',
  payload: {
    overlayVisible
  }
});

export const increaseTime = () => ({
  type: 'INCREASE_TIME'
});

export const setTime = time => ({
  type: 'SET_TIME',
  payload: {
    time: time
  }
});

export const pauseTime = pause => ({
  type: 'PAUSE_TIME',
  payload: {
    pause: pause
  }
});
