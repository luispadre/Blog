import React, { Component, useState,createContext } from 'react';

export const AuthContext = createContext();

function  AuthContextProvider({children}){
  const [state,setState] =useState({
    isAuthenticated: false,
    token:''
  })

   function toggleAuth() {
    setState({ isAuthenticated: !state.isAuthenticated });
  }
  
    return (
      <AuthContext.Provider value={{...state, toggleAuth: toggleAuth}}>
        {children}
      </AuthContext.Provider>
    );
  
}
 
export default AuthContextProvider;