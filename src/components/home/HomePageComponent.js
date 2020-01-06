import React from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import {withStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const styles = {
  marginContainer: {
    width: '480px',
    height: '280px',
    margin: '10% auto 0 auto',
    padding: '0',
    backgroundColor: 'white',
    border: '1px solid rgb(0,0,0,0.3)',
    borderRadius: '10px',
    boxShadow: '2px 3px 20px 0px',
  },
  itemStyles: {
    height: '140px',
  },
  textStyles: {
    color: 'rgb(0,0,0,0.5)',
    font: '600 28px Arial, sans-serif',
    margin: '0 auto',
  },
};

const HomePageComponent = ({classes}) => (
  <List component="nav" aria-label="mailbox folders" className={classes.marginContainer}>
    <ListItem button className={classes.itemStyles}>
      <Typography variant="button" display="block" className={classes.textStyles}>
        Check Out News
      </Typography>
    </ListItem>
    <Divider />
    <ListItem button className={classes.itemStyles}>
      <Typography variant="button" display="block" className={classes.textStyles}>
        Login
      </Typography>
    </ListItem>
  </List>
);

export default withStyles(styles)(HomePageComponent);