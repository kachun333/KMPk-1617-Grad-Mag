export const setGraduates = ({ firebase }, datasource) => {
  return (dispatch, getState) => {
      const graduates = getImages(firebase, datasource);
      dispatch({ type: "SET_GRADUATES", graduates });
  }
};

export const filterGraduates = (searchOptions) => {
  return (dispatch, getState) => {
    const graduates = getState().graduates.data;
    const filteredItems = filterItems(graduates, searchOptions)
    dispatch({ type: "FILTER_GRADUATES", filteredItems });
  }
};

function findWithAttr(array, attr, value) {
  for (var i = 0; i < array.length; i += 1) {
    if (array[i][attr] === value) {
      return i;
    }
  }
  return -1;
}

function getImages(firebase, graduates) {
  if (!graduates){
    return null;
  }
  const storageRef = firebase.storage().ref("graduates");
  storageRef.listAll()
    .then((result) => {
      result.items.forEach((imageRef) => {
        let imageName = imageRef.name.split(".")[0];
        imageRef.getDownloadURL()
          .then((url) => {
            let index = findWithAttr(graduates, "name", imageName)
            if (index >= 0) {
              graduates[index] = { ...graduates[index], image: url }
            }
          })
          .catch(err => console.error('Fail to load graduates image: ', err))
      });
    })
    .catch(err => console.log('Fail to load graduates: ', err))

  return graduates;
}

function filterItem(item, searchOptions) {
  if (
    Object.values(item).some(values =>
      values
        .toString()
        .toLowerCase()
        .includes(searchOptions.searchTerm.toLowerCase())
    )
  ) {
    return item;
  } else {
    return undefined;
  }
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