import { Container, Grid } from "@mui/material";
import * as React from "react";

function Form(props) {
  const { children, ...other } = props;

  return (
      <div>
        <form noValidate autoComplete="off" {...other}>
          {children}
        </form>
      </div>
  );
}

export default Form;
