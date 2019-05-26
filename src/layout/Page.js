import React from "react";
import { makeStyles } from "@material-ui/styles";
import classNames from "classnames";
import Flexbox from "./Flexbox";

const Page = ({ children, className, ...other }) => {
  const classes = useStyles();
  return (
    <Flexbox
      flex="1"
      justifyContent="center"
      alignItems="center"
      className={classNames(classes.page, className)}
      {...other}
    >
      {children}
    </Flexbox>
  );
};

const useStyles = makeStyles(() => ({
  page: {}
}));

export default Page;
