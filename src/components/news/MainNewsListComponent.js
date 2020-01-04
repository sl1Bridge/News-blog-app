import React from 'react';

import OneNewsComponent from "./OneNewsComponent";

import {Paper, withStyles} from "@material-ui/core";
import Container from "@material-ui/core/Container";

const styles = {
  marginContainer: {
    padding: '10px 0',
  },
};

const MainNewsListComponent = ({classes}) => (
  <Container maxWidth="md">
    <Paper elevation={2} className={classes.marginContainer}>
      <OneNewsComponent />
      <OneNewsComponent />
      <OneNewsComponent />
      <OneNewsComponent />
      <OneNewsComponent />
      <OneNewsComponent />
      <OneNewsComponent />
      <OneNewsComponent />
    </Paper>
  </Container>
);

export default withStyles(styles)(MainNewsListComponent);