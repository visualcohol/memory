const initialState = {
  overlayVisible: false,
  time: 0,
  timeInterval: null
};

export default function ui(state = initialState, action) {
  switch (action.type) {
    case 'OVERLAY_SWITCH':
      return { ...state, overlayVisible: action.payload.overlayVisible };

    case 'INCREASE_TIME':
      return { ...state, time: state.time + 1000 };

    case 'SET_TIME_INTERVAL':
      return { ...state, timeInterval: action.payload.interval };

    default:
      return state;
  }
}
