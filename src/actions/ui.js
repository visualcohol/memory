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

export const flipFirst = cardId => ({
  type: 'FLIP_FIRST',
  payload: {
    cardId: cardId
  }
});

export const flipSecond = cardId => ({
  type: 'FLIP_SECOND',
  payload: {
    cardId: cardId
  }
});

export const addFound = id => ({
  type: 'ADD_FOUND',
  payload: {
    id: id
  }
});
