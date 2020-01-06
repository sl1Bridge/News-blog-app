import {changeLoginStatusActionCreator} from "./actionCreators";

export const changeLoginStatusAction = () => dispatch => {
  dispatch(changeLoginStatusActionCreator())
};