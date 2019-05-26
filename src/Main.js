import React from "react";
import { Typography } from "@material-ui/core";
import { Redirect } from "@reach/router";
import AnimatedRouter from "./AnimatedRouter";
import Flexbox from "./layout/Flexbox";
import Toolbar from "./layout/Toolbar";
import Home from "./pages/Home";
import HomeTools from "./pages/HomeTools";
import AboutTools from "./pages/AboutTools";
import About from "./pages/About";
import LinkButton from "./controls/LinkButton";

const pageTransitionProps = {
  from: { opacity: 0, transform: "translate3d(100px, 0, 0)" },
  enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
  leave: { opacity: 0, transform: "translate3d(-100px, 0, 0)" }
};

const buttonTransitionProps = {
  from: { opacity: 0, transform: "translateY(-20px)" },
  enter: { opacity: 1, transform: "translateY(0)" },
  leave: { opacity: 0, transform: "translateY(0)" },
  config: { mass: 1, tension: 400, friction: 20 }
};

const Main = ({ location }) => {
  return (
    <Flexbox flex="1" flexDirection="column">
      <Toolbar>
        <LinkButton to="home" label="Home" />
        <LinkButton to="about" label="About" />
        <AnimatedRouter
          location={location}
          transitionProps={buttonTransitionProps}
        >
          <HomeTools path="home" />
          <AboutTools path="about" />
        </AnimatedRouter>
        <Typography style={{ marginLeft: "auto" }}>
          {location.pathname}
        </Typography>
      </Toolbar>
      <AnimatedRouter
        location={location}
        containerProps={{ flex: "1" }}
        transitionProps={pageTransitionProps}
      >
        <Home path="home" />
        <About path="about" />
        <Redirect from="/*" to="home" noThrow />
      </AnimatedRouter>
    </Flexbox>
  );
};

export default Main;
