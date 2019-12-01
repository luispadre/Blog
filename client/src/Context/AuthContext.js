import React, { Component, useState,createContext } from 'react';

export const AuthContext = createContext();

function  AuthContextProvider({children}){
  const [state,setState] =useState({
    isAuthenticated: false,
    token:''
  })

  function handleSubmit  (event, signupUser) {
    event.preventDefault();
    signupUser().then(async ({ data }) => {
        const {login}=data
        setState({
          ...state,
          token:login.token,
          isAuthenticated:!state.isAuthenticated
        });
        //localStorage.setItem('token', data.signupUser.token);
        //await this.props.refetch();
        // clearState();
        // this.props.history.push('/')
    });
}
  
    return (
      <AuthContext.Provider value={{...state,handleSubmit:handleSubmit}}>
        {children}
      </AuthContext.Provider>
    );
  
}
 
export default AuthContextProvider;