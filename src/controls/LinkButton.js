import React from "react";
import { Link } from "@reach/router";
import { Button } from "@material-ui/core";

const LinkButton = ({ label, to }) => (
  <Button component={Link} to={to}>
    {label}
  </Button>
);

export default LinkButton;
