import {changeLoginStatusActionCreator, changeUsernameActionCreator} from "./actionCreators";

export const changeLoginStatusAction = () => dispatch => {
  dispatch(changeLoginStatusActionCreator())
};

export const changeUsernameAction = (newUsername) => dispatch => {
  dispatch(changeUsernameActionCreator(newUsername))
};