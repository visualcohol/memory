const initialState = {
  overlayVisible: false,
  time: 0,
  timePaused: false,
  firstFlipped: null,
  secondFlipped: null,
  found: [],
  cards: {
    1: {
      uuid: 1,
      cid: 5,
      flipped: false,
      matched: false
    }
  }
};

export default function ui(state = initialState, action) {
  switch (action.type) {
    case 'OVERLAY_SWITCH':
      return { ...state, overlayVisible: action.payload.overlayVisible };

    case 'INCREASE_TIME':
      return { ...state, time: state.time + 1000 };

    case 'SET_TIME':
      return { ...state, time: action.payload.time };

    case 'PAUSE_TIME':
      return { ...state, timePaused: action.payload.pause };

    case 'FLIP_FIRST':
      return { ...state, firstFlipped: action.payload.cardId };

    case 'FLIP_SECOND':
      return { ...state, secondFlipped: action.payload.cardId };

    case 'ADD_FOUND':
      return { ...state, found: state.found.push(action.payload.id) };

    default:
      return state;
  }
}
