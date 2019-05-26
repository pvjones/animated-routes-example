import React from "react";
import { Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const ToolContainer = ({ children, className, ...other }) => {
  const classes = useStyles();

  return (
    <Toolbar className={classes.root} {...other}>
      {children}
    </Toolbar>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    "& > a, button": {
      marginRight: "8px"
    }
  }
}));

export default ToolContainer;
