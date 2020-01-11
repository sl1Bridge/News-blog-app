import React from "react";
import {withStyles} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import {connect} from "react-redux";
import {changeLoginStatusAction} from "../../actions/loginActions/actions";
import {bindActionCreators} from "redux";
import history from "../../history";

const styles = {
  flexContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formContainer: {
    width: '380px',
    height: '280px',
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
  errorStyles: {
    color: 'red',
    margin: '0 auto 0 20px'
  }
};

const SignInComponent = ({classes, username, password, actions: { changeLoginStatusAction }}) => {
  const [inputUsername, setInputUsername] = React.useState('');
  const [inputPassword, setInputPassword] = React.useState('');
  const [displayErr, setDisplayErr] = React.useState(false);

  return (
  <div className={classes.formContainer}>
    <form onSubmit={event => {
                        event.preventDefault();
                        if(inputUsername === username && inputPassword === password) {
                          changeLoginStatusAction();
                          history.push('/profile')
                        } else {
                          setDisplayErr(true)
                        }
                      }}
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
      {
        displayErr ?
        <Typography variant="caption" className={classes.errorStyles}>
          Invalid username or password
        </Typography> : null
      }
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

const mapStateToProps = ({rootReducer}) => ({
  loginStatus: rootReducer.loginStatus,
  username: rootReducer.username,
  password: rootReducer.password,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    changeLoginStatusAction
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SignInComponent));