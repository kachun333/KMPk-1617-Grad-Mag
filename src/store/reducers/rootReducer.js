import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import { combineReducers } from "redux";
import appReducer from "./appReducer";
import graduateReducer from "./graduateReducer";

const rootReducer = combineReducers({
  graduates: graduateReducer,
  app: appReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

export default rootReducer;
