export const switchOverlay = config => ({
  type: 'OVERLAY_SWITCH',
  payload: {
    config
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

export const setCards = cards => ({
  type: 'SET_CARDS',
  payload: {
    cards: cards
  }
});
