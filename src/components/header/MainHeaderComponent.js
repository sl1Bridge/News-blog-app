import React from 'react';

import {withStyles} from "@material-ui/core";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import history from "../../history";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {logOutAction} from "../../actions/loginActions/actions";


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
  buttonIcon: {
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

const MainHeaderComponent = ({classes, loginStatus, actions: {logOutAction}}) => (
    <AppBar position="static">
      <Toolbar className={classes.headerContainer}>
        <Link to="/" className={classes.linkStyles}>
          <IconButton edge="start"
                      color="inherit"
                      aria-label="home"
                      className={classes.homeButton}
          >
            <HomeIcon className={classes.buttonIcon}/>
          </IconButton>
        </Link>
        <Typography variant="h4"
                    className={classes.title}
        >
          {(history.location.pathname === "/profile") ? "Profile" : "News"}
        </Typography>
        {
          (loginStatus === false) ?
          <Link to="/login" className={classes.linkStyles}>
            <Button color="inherit"
                    className={classes.loginButton}
            >
              Login
            </Button>
          </Link> :
          <div>
            <Link to="/profile" className={classes.linkStyles}>
              <Button color="inherit"
                      className={classes.loginButton}
              >
                Profile
              </Button>
            </Link>
            <IconButton edge="start"
                        color="inherit"
                        aria-label="logout"
                        onClick={() => logOutAction()}
                        className={classes.homeButton}
                        >
              <ExitToAppIcon className={classes.buttonIcon}/>
            </IconButton>
          </div>
        }
      </Toolbar>
    </AppBar>
);

const mapStateToProps = ({rootReducer}) => ({
  loginStatus: rootReducer.loginStatus
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    logOutAction,
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MainHeaderComponent));