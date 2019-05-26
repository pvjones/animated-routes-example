import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useTransition, animated, config } from "react-spring";
import Page from "../layout/Page";

const About = ({ location }) => {
  const classes = useStyles();

  const transitions = useTransition(location, location => location.pathname, {
    from: { transform: "translateY(-200px)", opacity: 0 },
    enter: { transform: "translateY(0)", opacity: 1 },
    leave: { transform: "translateY(200px)", opacity: 0 },
    config: config.stiff
  });

  return (
    <Page className={classes.root}>
      {transitions.map(({ item, props, key }) => (
        <animated.span key={key} style={props} className={classes.container}>
          <Typography variant="h1">About</Typography>
        </animated.span>
      ))}
    </Page>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
    backgroundColor: "lightblue",
    color: "white"
  },
  container: {
    position: "absolute"
  }
}));

export default About;
