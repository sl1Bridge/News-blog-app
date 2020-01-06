import {ACTION_LOGIN_STATUS_CHANGED} from "../actions/loginActions/actionCreators";

const defautState = {
  loginStatus: false,
  username: 'Admin',
  password: '12345',
};

export const loginReducer = (state = defautState, action) => {
  switch (action.type) {
    case ACTION_LOGIN_STATUS_CHANGED: {
      return {
        ...state,
        loginStatus: action.payload
      }
    }

    default:
      return state;
  }
};