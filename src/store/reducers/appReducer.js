const initState = {
  title: "Our Promise",
}

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_TITLE':
      console.log('create project', action.newTitle);
      return state;
    default:
      return state;
  }
};

export default appReducer;
