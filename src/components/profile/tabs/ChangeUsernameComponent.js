import React from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import {withStyles} from "@material-ui/core";
import {connect} from "react-redux";
import {changePasswordAction, changeUsernameAction} from "../../../actions/loginActions/actions";
import {bindActionCreators} from "redux";

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

const ChangeUsernameComponent = ({classes, username, actions: { changeUsernameAction }}) => {
  const [inputPrev, setInputPrev] = React.useState('');
  const [inputNew, setInputNew] = React.useState('');

  return (
    <div className={classes.formContainer}>
      <form onSubmit={(event => {
        event.preventDefault();
        if(inputPrev === username) {
          changeUsernameAction(inputNew)
        }
      })}>
        <div className={classes.fieldsContainer}>
          <Typography className={classes.textLabel}> Previous Username </Typography>
          <TextField placeholder="Prev Username"
                     variant="outlined"
                     size="small"
                     value={inputPrev}
                     onChange={(event) => setInputPrev(event.target.value)}
                     className={classes.fieldStyles}/>
          <Typography className={classes.textLabel}> New Username </Typography>
          <TextField placeholder="New Username"
                     variant="outlined"
                     size="small"
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
  username: rootReducer.username,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    changeUsernameAction,
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ChangeUsernameComponent));