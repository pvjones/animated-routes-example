import React from "react";
import { makeStyles } from "@material-ui/styles";
import classNames from "classnames";

const Flexbox = ({
  children,
  className,
  flex,
  flexDirection,
  justifyContent,
  alignItems
}) => {
  const classes = useStyles({
    flex,
    flexDirection,
    justifyContent,
    alignItems
  });

  return <div className={classNames(classes.root, className)}>{children}</div>;
};

const useStyles = makeStyles(() => ({
  root: ({
    flex,
    flexDirection = "row",
    justifyContent = "flex-start",
    alignItems = "flex-stretcn"
  }) => ({
    flexDirection,
    justifyContent,
    alignItems,
    flex,
    display: "flex"
  })
}));

export default Flexbox;
