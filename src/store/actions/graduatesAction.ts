export const setGraduates =
  ({ firebase }, datasource) =>
  (dispatch) => {
    const graduates = getImages(firebase, datasource);
    dispatch({ type: "SET_GRADUATES", graduates });
  };

export const filterGraduates = (searchOptions) => (dispatch, getState) => {
  console.log("inside filter graduates ");
  const graduates = getState().graduates.data;
  const filteredItems = filterItems(graduates, searchOptions);
  dispatch({ type: "FILTER_GRADUATES", filteredItems });
};

function filterItem(item, searchOptions) {
  if (
    Object.values(item).some((values) => {
      if (typeof values.toString()) {
        values
          .toString()
          .toLowerCase()
          .includes(searchOptions.searchTerm.toLowerCase());
      }
    })
  ) {
    return item;
  }
  return undefined;
}

function filterItems(items, searchOptions) {
  return items.reduce((accumulator, currentItem) => {
    const foundItem = filterItem(currentItem, searchOptions);
    if (foundItem) {
      accumulator.push(foundItem);
    }
    return accumulator;
  }, []);
}
