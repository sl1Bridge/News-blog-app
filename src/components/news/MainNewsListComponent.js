import React from 'react';

import OneNewsComponent from "./OneNewsComponent";

import {Paper, withStyles} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import {newsData} from "../../data/newsData";

const styles = {
  marginContainer: {
    padding: '10px 0',
  },
};

const MainNewsListComponent = ({classes}) => (
  <Container maxWidth="md">
    <Paper elevation={2} className={classes.marginContainer}>
      {
        newsData.map(({id, article, title}) => (
          <OneNewsComponent key={id} title={title} article={article}/>
        ))
      }
    </Paper>
  </Container>
);

export default withStyles(styles)(MainNewsListComponent);