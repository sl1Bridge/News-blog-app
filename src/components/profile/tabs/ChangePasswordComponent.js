import React from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import {withStyles} from "@material-ui/core";
import {connect} from "react-redux";
import {changePasswordAction} from "../../../actions/loginActions/actions";

const styles = {
  formContainer: {
    height: '200px'
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

const ChangePasswordComponent = ({classes, password, onChangeBtnClick}) => {
  const [inputPrev, setInputPrev] = React.useState('');
  const [inputNew, setInputNew] = React.useState('');

  return (
    <div className={classes.formContainer}>
      <form onSubmit={(event => {
        event.preventDefault();
        if(inputPrev === password) {
          onChangeBtnClick(inputNew)
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

const mapDispatchToProps = (dispatch) => ({
  onChangeBtnClick: (newPassword) => dispatch(changePasswordAction(newPassword)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ChangePasswordComponent));