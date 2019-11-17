import React from "react";
import TextField from "@material-ui/core/TextField";

export const Input = props => {
  
  const { id, label, name, required ,type,value,onChange} = props;
  return (
    <TextField
      variant="outlined"
      margin="normal"
      required={required}
      value={value}
      onChange={onChange}
      fullWidth
      name={name}
      label={label}
      type={type}
      id={id}
      autoComplete="current-password"
    />
  );
};
