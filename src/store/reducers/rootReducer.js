import authReducer from './authReducer'
import graduateReducer from './graduateReducer'
import committeeReducer from './committeeReducer'
import appReducer from './appReducer'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: authReducer,
  graduate: graduateReducer,
  committee: committeeReducer,
  app: appReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  // function: functionReducer,
  // storage: storageReducer,
});

export default rootReducer