const initState = {
  title: "Our Promise",
  cards: null,
}

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_TITLE':
      // console.log('create project', action.newTitle);
      return state;
    case 'SET_CARDS':
      return {
        ...state,
        cards: action.cards,
      }
      return state;
    default:
      return state;
  }
};

export default appReducer;
