import { FirebaseApp, initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { FirebaseStorage, getStorage } from "firebase/storage";
import { createContext } from "react";
import { FIREBASE_CONFIG } from "./firebase.constants";

export interface FirebaseContextValue {
  app: FirebaseApp;
  auth: Auth;
  storage: FirebaseStorage;
}

const app = initializeApp(FIREBASE_CONFIG);
const auth = getAuth(app);
const storage = getStorage(app);
export const firebaseContextValue: FirebaseContextValue = {
  app,
  auth,
  storage,
};

const FirebaseContext =
  createContext<FirebaseContextValue>(firebaseContextValue);

export default FirebaseContext;
