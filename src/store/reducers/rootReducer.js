import graduateReducer from './graduateReducer'
import appReducer from './appReducer'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  graduates: graduateReducer,
  app: appReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

export default rootReducer