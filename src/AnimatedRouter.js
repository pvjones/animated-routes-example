import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Router } from "@reach/router";
import { useTransition, animated } from "react-spring";
import classNames from "classnames";
import Flexbox from "./layout/Flexbox";

const AnimatedRouter = ({
  children,
  location,
  transitionProps,
  containerProps,
  animatedProps,
  className,
  ...other
}) => {
  const classes = useStyles();
  const transitions = useTransition(
    location,
    location => location.pathname,
    transitionProps
  );

  return (
    <Flexbox
      className={classNames(classes.root, className)}
      {...containerProps}
    >
      {transitions.map(({ item, key, props }) => (
        <animated.div
          key={key}
          style={props}
          className={classes.animated}
          {...animatedProps}
        >
          <Router location={item}>{children}</Router>
        </animated.div>
      ))}
    </Flexbox>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
    height: "100%",
    alignItems: "unset"
  },
  animated: {
    display: "flex",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
}));

export default AnimatedRouter;
