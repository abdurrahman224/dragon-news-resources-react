import React, { createContext, useState } from 'react';
import app from '../components/firebase/AddFirebase';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const createNewUser = (email, password) => {
    
return createUserWithEmailAndPassword(auth,email,password)

}



    const [User, setUser] = useState(null);
    console.log("User", User);
    

  const authInfo = {
    User,
    setUser,
    createNewUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
