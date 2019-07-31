const initialState = {
  overlayVisible: false
};

export default function ui(state = initialState, action) {
  switch (action.type) {
    case 'OVERLAY_SWITCH':
      return { ...state, overlayVisible: action.payload.overlayVisible };

    default:
      return state;
  }
}
