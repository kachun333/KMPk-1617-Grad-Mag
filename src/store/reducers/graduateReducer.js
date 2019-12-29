const initState = {
}

const graduateReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_GRADUATES':
      return {
        ...state,
        data: action.graduates,
        ordered: action.graduates,
      }
    case 'FILTER_GRADUATES':
      return {
        ...state,
        ordered: action.filteredItems
      }
    default:
      return state;
  }
};

export default graduateReducer;
