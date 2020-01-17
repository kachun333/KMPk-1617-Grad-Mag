const initState = {
  appTitle: "Our Promise",
}

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_APPTITLE':
      return {
        ...state,
        appTitle: action.newAppTitle,
      };
    default:
      return state;
  }
};

export default appReducer;
