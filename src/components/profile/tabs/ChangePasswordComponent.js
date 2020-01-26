import React from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import {withStyles} from "@material-ui/core";
import {connect} from "react-redux";
import {changePasswordAction} from "../../../actions/loginActions/actions";
import {bindActionCreators} from "redux";
import {styles} from "../../../styles/styles";

const ChangePasswordComponent = ({classes, password, actions: { changePasswordAction }}) => {
  const [inputPrev, setInputPrev] = React.useState('');
  const [inputNew, setInputNew] = React.useState('');

  return (
    <div className={classes.formContainer}>
      <form onSubmit={(event => {
        event.preventDefault();
        if(inputPrev === password) {
          changePasswordAction(inputNew)
        }
      })}>
        <div className={classes.fieldsContainer}>
          <Typography className={classes.textLabel}> Previous Password </Typography>
          <TextField placeholder="Prev Password"
                     variant="outlined"
                     size="small"
                     type="password"
                     autoComplete="password"
                     value={inputPrev}
                     onChange={(event) => setInputPrev(event.target.value)}
                     className={classes.fieldStyles}/>
          <Typography className={classes.textLabel}> New Password </Typography>
          <TextField placeholder="New Password"
                     variant="outlined"
                     size="small"
                     type="password"
                     autoComplete="password"
                     value={inputNew}
                     onChange={(event) => setInputNew(event.target.value)}
                     className={classes.fieldStyles}/>
        </div>
        <div>
          <Fab variant="extended"
               color="primary"
               aria-label="add"
               type="submit"
               className={classes.buttonStyles}>
            Change
          </Fab>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = ({rootReducer}) => ({
  password: rootReducer.password,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    changePasswordAction,
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ChangePasswordComponent));