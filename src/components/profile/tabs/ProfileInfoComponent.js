import React from "react";
import Typography from "@material-ui/core/Typography";
import {withStyles} from "@material-ui/core";
import {connect} from "react-redux";
import {styles} from "../../../styles/styles";

const ProfileInfoComponent = ({classes, username, password}) => (
  <div className={classes.profileContainer}>
    <Typography variant="h6" gutterBottom className={classes.rowStyles}>
      Username: {username}
    </Typography>
    <Typography variant="h6" gutterBottom className={classes.rowStyles}>
      Password: {password}
    </Typography>
  </div>
);

const mapStateToProps = ({rootReducer}) => ({
  username: rootReducer.username,
  password: rootReducer.password,
});

export default connect(mapStateToProps)(withStyles(styles)(ProfileInfoComponent));