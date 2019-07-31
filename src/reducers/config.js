const initialState = {
  cardCount: 16
};

export default function config(state = initialState, action) {
  switch (action.type) {
    case 'SET_CARD_COUNT':
      return { ...state, cardCount: action.payload.count };

    default:
      return state;
  }
}
