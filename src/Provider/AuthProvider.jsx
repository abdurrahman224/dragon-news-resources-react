
import React, { createContext, useState } from 'react';
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [Uset , setUser]= useState({

name: "Abdur Raham",
email:"abdurrahman21266057@gmail.com"


    })

const authInfo = {


Uset,
setUser

}


    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;