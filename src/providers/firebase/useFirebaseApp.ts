import { FirebaseApp } from "firebase/app";
import { useContext } from "react";
import FirebaseContext from "./FirebaseContext";

function useFirebase(): FirebaseApp | undefined {
  const { app } = useContext(FirebaseContext);
  return app;
}

export default useFirebase;
