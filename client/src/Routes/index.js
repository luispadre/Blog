import React,{memo} from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import {
  Layout,
  NoMatch,
  UnRegistered,
  SignIn,
  Religion,
  Jobs
} from './../helpers/ConstRouters'
import Religion from "../Pages/Religion";
import SignUp from "../Pages/SignUp";




  
export default memo(function Routes() {
    return (
      <Router>
          <Switch>
          <Route path="/" exact render={()=>(<Layout><UnRegistered/></Layout>)} /> 
          <Route path="/login" exact render={()=>(<Layout><SignIn/></Layout>)} /> 
          <Route path="/Religion" render={()=>(<Layout><Religion/></Layout>)} /> 
          <Route path="/Noticias" render={()=>(<Layout><Religion/></Layout>)} /> 
          <Route path="/Anuncios" render={()=>(<Layout><Religion/></Layout>)} /> 
          <Route path="/Bolsa-Trabajo" render={()=>(<Layout><Jobs/></Layout>)} /> 
          <Route path="/Servicios" render={()=>(<Layout><Religion/></Layout>)} /> 
          <Route path="/Cargos-Comunitarios" render={()=>(<Layout><Religion/></Layout>)} /> 
          <Route path="/Eventos" render={()=>(<Layout><Religion/></Layout>)} /> 
          <Route path="/SignUp" render={()=>(<Layout><SignUp/></Layout>)} /> 
          <Route component={NoMatch} />
          
          </Switch>
      </Router>
    );
  })