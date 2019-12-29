export const setTitle = (newTitle) => {
  return (dispatch, getState) => {
    // make async call to database
    dispatch({ type: 'SET_TITLE', newTitle });
  }
};

export const getCards = ({ firebase }, datasource) => {
  return (dispatch) => {
      const cards = getImages(firebase, datasource);
      dispatch({ type: "SET_CARDS", cards });
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

function getImages(firebase, cards) {
  if (!cards){
    return null;
  }
  const storageRef = firebase.storage().ref("banners");
  storageRef.listAll()
    .then((result) => {
      result.items.forEach((imageRef) => {
        let imageName = imageRef.name.split(".")[0];
        imageRef.getDownloadURL()
          .then((url) => {
            let index = findWithAttr(cards, "image", imageName)
            if (index >= 0) {
              cards[index] = { ...cards[index], image: url }
            }
          })
          .catch(err => console.error('Fail to load card image: ', err))
      });
    })
    .catch(err => console.log('Fail to load cards: ', err))

  return cards;
}