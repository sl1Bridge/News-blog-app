import React from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import {withStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import {styles} from "../../styles/styles";

const HomePageComponent = ({classes, loginStatus}) => (
  <List component="nav" aria-label="mailbox folders" className={classes.homeContainer}>
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