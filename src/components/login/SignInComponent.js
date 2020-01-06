import React from "react";
import {withStyles} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";

const styles = {
  flexContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formContainer: {
    width: '380px',
    height: '250px',
    margin: '10% auto 0 auto',
    padding: '0',
    backgroundColor: 'white',
    border: '1px solid rgb(0,0,0,0.3)',
    borderRadius: '10px',
    boxShadow: '2px 3px 20px 0px',
  },
  fieldsContainer: {
    marginTop: '20px',
  },
  textLabel: {
    font: '600 14px Arial, sans-serif',
    marginBottom: '5px',
  },
  buttonStyles: {
    marginTop: '10px',
  },
  fieldStyles: {
    marginBottom: '15px',
  },
};

const SignInComponent = ({classes}) => (
  <div className={classes.formContainer}>
    <form action="" className={classes.flexContainer}>
      <div className={classes.fieldsContainer}>
        <Typography className={classes.textLabel}> Username </Typography>
        <TextField placeholder="Username"
                   variant="outlined"
                   size="small"
                   className={classes.fieldStyles}/>
        <Typography className={classes.textLabel}> Password </Typography>
        <TextField placeholder="Password"
                   variant="outlined"
                   size="small"
                   type="password"
                   className={classes.fieldStyles}/>
      </div>
      <div>
        <Fab variant="extended"
             color="primary"
             aria-label="add"
             className={classes.buttonStyles}>
          Sign In
        </Fab>
      </div>
    </form>
  </div>
);

export default withStyles(styles)(SignInComponent);