import authReducer from './authReducer'
import graduateReducer from './graduateReducer'
import committeeReducer from './committeeReducer'
import appReducer from './appReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: authReducer,
  graduate: graduateReducer,
  committee: committeeReducer,
  app: appReducer,
});

export default rootReducer