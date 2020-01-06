import React, {useState} from "react";
import {withStyles} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import {connect} from "react-redux";
import {changeLoginStatusAction} from "../../actions/loginActions/actions";

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
    width: '350px',
  },
};

const SignInComponent = ({classes, loginStatus, username, password, onSignInBtnClick}) => {
  const [inputUsername, setInputUsername] = React.useState('');
  const [inputPassword, setInputPassword] = React.useState('');

  return (
  <div className={classes.formContainer}>
    <form onSubmit={(event => {
                        event.preventDefault();
                        if(inputUsername === username && inputPassword === password) {
                          onSignInBtnClick()
                        }
                      })}
          className={classes.flexContainer}>
      <div className={classes.fieldsContainer}>
        <Typography className={classes.textLabel}> Username </Typography>
        <TextField placeholder="Username"
                   variant="outlined"
                   size="small"
                   value={inputUsername}
                   onChange={(event) => setInputUsername(event.target.value)}
                   className={classes.fieldStyles}/>
        <Typography className={classes.textLabel}> Password </Typography>
        <TextField placeholder="Password"
                   variant="outlined"
                   size="small"
                   type="password"
                   autoComplete="password"
                   value={inputPassword}
                   onChange={(event) => setInputPassword(event.target.value)}
                   className={classes.fieldStyles}/>
      </div>
      <div>
        <Fab variant="extended"
             color="primary"
             aria-label="add"
             type="submit"
             className={classes.buttonStyles}>
          Sign In
        </Fab>
      </div>
    </form>
  </div>
  )
};

const mapStateToProps = ({loginReducer}) => ({
  loginStatus: loginReducer.loginStatus,
  username: loginReducer.username,
  password: loginReducer.password,
});

const mapDispatchToProps = (dispatch) => ({
  onSignInBtnClick: () => dispatch(changeLoginStatusAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SignInComponent));