import React from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import {withStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import {connect} from "react-redux";

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
  linkStyles: {
    color: 'inherit',
    textDecoration: 'inherit',
  },
};

const HomePageComponent = ({classes, loginStatus}) => (
  <List component="nav" aria-label="mailbox folders" className={classes.marginContainer}>
    <Link to="/news" className={classes.linkStyles}>
      <ListItem button className={classes.itemStyles}>
        <Typography variant="button" display="block" className={classes.textStyles}>
           Check Out News
        </Typography>
      </ListItem>
    </Link>
    <Divider />
    {
      (loginStatus) ?
    <Link to="/profile" className={classes.linkStyles}>
      <ListItem button className={classes.itemStyles}>
        <Typography variant="button" display="block" className={classes.textStyles}>
          Profile
        </Typography>
      </ListItem>
    </Link> :
    <Link to="/login" className={classes.linkStyles}>
      <ListItem button className={classes.itemStyles}>
        <Typography variant="button" display="block" className={classes.textStyles}>
          Login
        </Typography>
      </ListItem>
    </Link>
    }
  </List>
);

const mapStateToProps = ({rootReducer}) => ({
  loginStatus: rootReducer.loginStatus
});

export default connect(mapStateToProps)(withStyles(styles)(HomePageComponent));