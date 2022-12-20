import { FirebaseApp, initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { createContext } from "react";
import { FIREBASE_CONFIG } from "./firebase.constants";

export interface FirebaseContextValue {
  app: FirebaseApp;
  auth: Auth;
}

const app = initializeApp(FIREBASE_CONFIG);
const auth = getAuth(app);
export const firebaseContextValue: FirebaseContextValue = {
  app,
  auth,
};

const FirebaseContext =
  createContext<FirebaseContextValue>(firebaseContextValue);

export default FirebaseContext;
