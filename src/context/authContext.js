import React, { useState, useContext, useEffect } from "react";
const AuthContext = React.createContext(undefined);
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    userSignedIn: false,
    name: "",
    email: "",
    userID: "",
    userDesc: "",
    userImg: "",
  });

  useEffect(() => {
    let authLocal = localStorage.getItem("authBlog");
    if (authLocal) {
      let authLocalObj = JSON.parse(authLocal);
      if (authLocal) {
        setAuth(authLocalObj);
      }
    }
  }, []);
  // taking last credentials from local storage
  const userSignIn = (name, email, userID, userDesc, userImg) => {
    setAuth({
      userSignedIn: true,
      name,
      email,
      userID,
      userDesc,
      userImg,
    });
  };

  const userSignOut = () => {
    setAuth({
      userSignedIn: false,
      name: "",
      email: "",
      userID: "",
      userDesc: "",
      userImg: "",
    });
  };
  const data = [auth, userSignIn, userSignOut];
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth can only be used inside AuthProvider");
  }
  return context;
};
