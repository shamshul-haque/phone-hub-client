import { createUserWithEmailAndPassword } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext } from "react";
import auth from "../configuration/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  // create user
  const userRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = { userRegister };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
