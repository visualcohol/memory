const initialState = {
  overlayVisible: false,
  time: 0,
  timePaused: false,
  cards: []
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

    case 'SET_CARDS':
      return { ...state, cards: action.payload.cards };

    default:
      return state;
  }
}
