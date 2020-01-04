import React from 'react';

import {withStyles} from "@material-ui/core";
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
};

const MainHeaderComponent = ({classes}) => (
    <AppBar position="static">
      <Toolbar className={classes.headerContainer}>
        <IconButton edge="start"
                    color="inherit"
                    aria-label="home"
                    className={classes.homeButton}
        >
          <HomeIcon className={classes.homeButtonIcon}/>
        </IconButton>
        <Typography variant="h4"
                    className={classes.title}
        >
          News
        </Typography>
        <Button color="inherit"
                className={classes.loginButton}
        >
          Login
        </Button>
      </Toolbar>
    </AppBar>
);

export default withStyles(styles)(MainHeaderComponent);