const initState = {
  title: "Our Promise",
  cards: null,
}

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_TITLE':
      return state;
    case 'SET_CARDS':
      return {
        ...state,
        cards: action.cards,
      }
    default:
      return state;
  }
};

export default appReducer;
