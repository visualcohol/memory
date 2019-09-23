const initialState = {
  overlay: { visible: false, content: null, effect: '', timeout: null },
  time: 0,
  timePaused: false,
  cards: []
};

export default function ui(state = initialState, action) {
  switch (action.type) {
    case 'OVERLAY_SWITCH':
      return {
        ...state,
        overlay: { ...initialState.overlay, ...action.payload.config }
      };

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
