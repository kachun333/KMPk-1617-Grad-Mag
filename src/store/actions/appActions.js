export const setTitle = (newTitle) => {
  return (dispatch, getState) => {
    // make async call to database
    dispatch({ type: 'SET_TITLE', newTitle });
  }
};