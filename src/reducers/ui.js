const initialState = {
  overlayVisible: false,
  time: 0,
  timePaused: false
};

export default function ui(state = initialState, action) {
  switch (action.type) {
    case 'OVERLAY_SWITCH':
      return { ...state, overlayVisible: action.payload.overlayVisible };

    case 'INCREASE_TIME':
      return { ...state, time: state.time + 1000 };

    case 'PAUSE_TIME':
      return { ...state, timePaused: action.payload.pause };

    default:
      return state;
  }
}
