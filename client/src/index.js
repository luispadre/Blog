import React from "react";
import ReactDOM from "react-dom";

import client from "./apolloClient";
import AuthContextProvider from "./Context/AuthContext";
// import { ApolloProvider } from 'react-apollo'
import { ApolloProvider } from '@apollo/react-hooks';

import Route from "./Routes";

// Se importan los estilos globales
import "./Styles/ImportCss.scss";
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <ApolloProvider client={client}>

      <AuthContextProvider>
      <CssBaseline />
      
        <Route />
      </AuthContextProvider>
      </ApolloProvider>

  );
}
ReactDOM.render(<App />, document.getElementById("root"));
