export const TODO_ADDED = "Added";
export const ERROR = "Error";

export const generatorActions = ({ firestore }, todo) => {
  return (dispatch, getState) => {
    
    firestore
      .collection("graduates")
      .doc(gForm.id)
      .add(data)
      .then(() => {
        console.log("Then it was done");
      })
      .catch(err => {
        console.log("Too bad error occur");
      });
    firestore
      .collection("todos")
      .add(todo)
      .then(() => {
        console.log("Then it was done");
      })
      .catch(err => {
        console.log("Too bad error occur");
      });
  };
};