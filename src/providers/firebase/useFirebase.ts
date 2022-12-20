import { useContext } from "react";
import FirebaseContext, { FirebaseContextValue } from "./FirebaseContext";

function useFirebase(): FirebaseContextValue {
  return useContext(FirebaseContext);
}

export default useFirebase;
