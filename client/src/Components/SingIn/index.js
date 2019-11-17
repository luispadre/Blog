import gql from "graphql-tag";
import React, { useState } from "react";
import { Input } from "./../Input";
import { useStyles } from "./styles";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";

import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useQuery } from '@apollo/react-hooks';

import { Mutation } from "react-apollo";
import { useMutation } from '@apollo/react-hooks';

import {Error} from './../Menssages/Error'
import SigInContent from "./SignInContent";

const PERSONAS = gql`
{
users{
  name
}
}
`

const LOGIN = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }

  
`;

const POST_LOGIN = gql`
mutation login{
  login(input:{
    email:"asd@gil.acom"
    password:"127as127"
  }){
    token 
    
  }
}
`


export default function SignIn() {
return <SigInContent LOGIN={POST_LOGIN}/>
}
