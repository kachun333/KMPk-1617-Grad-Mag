import { FirebaseApp } from "firebase/app";
import { createContext } from "react";

export interface FirebaseContextValue {
  app?: FirebaseApp;
}

const FirebaseContext = createContext<FirebaseContextValue>({});

export default FirebaseContext;
