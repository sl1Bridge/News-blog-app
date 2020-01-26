import React from "react";
import {withStyles} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import {connect} from "react-redux";
import {changeLoginStatusAction} from "../../actions/loginActions/actions";
import {bindActionCreators} from "redux";
import history from "../../history";
import {styles} from "../../styles/styles";

const SignInComponent = ({classes, username, password, actions: { changeLoginStatusAction }}) => {
  const [inputUsername, setInputUsername] = React.useState('');
  const [inputPassword, setInputPassword] = React.useState('');
  const [displayErr, setDisplayErr] = React.useState(false);

  return (
  <div className={classes.signInFormContainer}>
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
      <div className={classes.fieldContainer}>
        <Typography className={classes.txtLabel}> Username </Typography>
        <TextField placeholder="Username"
                   variant="outlined"
                   size="small"
                   value={inputUsername}
                   onChange={(event) => setInputUsername(event.target.value)}
                   className={classes.textFieldStyles}/>
        <Typography className={classes.txtLabel}> Password </Typography>
        <TextField placeholder="Password"
                   variant="outlined"
                   size="small"
                   type="password"
                   autoComplete="password"
                   value={inputPassword}
                   onChange={(event) => setInputPassword(event.target.value)}
                   className={classes.textFieldStyles}/>
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
             className={classes.btnStyles}>
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