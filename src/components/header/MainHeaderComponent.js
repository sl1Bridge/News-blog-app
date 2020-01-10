import React from 'react';

import {withStyles} from "@material-ui/core";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import HomeIcon from '@material-ui/icons/Home';

const styles = {
  headerContainer: {
    height: '100px',
  },
  title: {
    flexGrow: 1,
  },
  homeButton: {
    margin: '0 35px 0 15px',
  },
  homeButtonIcon: {
    fontSize: '32px',
  },
  loginButton: {
    fontSize: '18px',
    marginRight: '15px',
  },
  linkStyles: {
    color: 'inherit',
    textDecoration: 'inherit',
  },
};

const MainHeaderComponent = ({classes}) => (
    <AppBar position="static">
      <Toolbar className={classes.headerContainer}>
        <Link to="/" className={classes.linkStyles}>
          <IconButton edge="start"
                      color="inherit"
                      aria-label="home"
                      className={classes.homeButton}
          >
            <HomeIcon className={classes.homeButtonIcon}/>
          </IconButton>
        </Link>
        <Typography variant="h4"
                    className={classes.title}
        >
          News
        </Typography>
        <Link to="/login" className={classes.linkStyles}>
          <Button color="inherit"
                  className={classes.loginButton}
          >
            Login
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
);

export default withStyles(styles)(MainHeaderComponent);