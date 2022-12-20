import { useContext } from "react";
import AuthContext, { AuthContextValue } from "./AuthContext";

function useAuth(): AuthContextValue {
  return useContext(AuthContext);
}

export default useAuth;
