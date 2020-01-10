import {
  changeLoginStatusActionCreator,
  changePasswordActionCreator,
  changeUsernameActionCreator, logOutActionCreator
} from "./actionCreators";

export const changeLoginStatusAction = () => dispatch => {
  dispatch(changeLoginStatusActionCreator())
};

export const logOutAction = () => dispatch => {
  dispatch(logOutActionCreator())
};

export const changeUsernameAction = (newUsername) => dispatch => {
  dispatch(changeUsernameActionCreator(newUsername))
};

export const changePasswordAction = (newPassword) => dispatch => {
  dispatch(changePasswordActionCreator(newPassword))
};