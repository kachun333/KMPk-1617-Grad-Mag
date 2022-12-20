import React, { PropsWithChildren } from "react";
import AuthContext from "./AuthContext";

// TODO: change to real value
const DEFAULT_VALUE = {
  userCredential: null,
  isVerified: false,
  isLoggedin: false,
  avatar: null,
};

const AuthProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <AuthContext.Provider value={DEFAULT_VALUE}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
