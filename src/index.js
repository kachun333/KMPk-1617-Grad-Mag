import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./i18n";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './store/reducers/rootReducer'
import thunk from 'redux-thunk'
import { createFirestoreInstance, getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/functions';
import 'firebase/storage';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB6X85xsX2Ka357ePsdqE2dvi6InReQ3AY",
  authDomain: "ourpromise.firebaseapp.com",
  databaseURL: "https://ourpromise.firebaseio.com",
  projectId: "ourpromise",
  storageBucket: "ourpromise.appspot.com",
  messagingSenderId: "4329458298",
  appId: "1:4329458298:web:036c73c2ee5d52ea92c9c3",
  measurementId: "G-92BR9NT688"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();
// firebase.functions();
// firebase.storage();

const initialState = {}
const store = createStore(rootReducer, initialState, applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})));

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
}

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
