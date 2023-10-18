import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext } from "react";
import auth from "../configuration/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  // Create user
  const userRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login user
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authInfo = { userRegister, userLogin };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
