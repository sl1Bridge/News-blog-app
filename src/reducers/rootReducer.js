import {
  ACTION_LOGIN_STATUS_CHANGED, ACTION_LOGOUT,
  ACTION_PASSWORD_CHANGED,
  ACTION_USERNAME_CHANGED
} from "../actions/loginActions/actionCreators";

const defautState = {
  loginStatus: false,
  username: 'Admin',
  password: '12345',
};

export const rootReducer = (state = defautState, action) => {
  switch (action.type) {
    case ACTION_LOGIN_STATUS_CHANGED: {
      return {
        ...state,
        loginStatus: action.payload
      }
    }

    case ACTION_LOGOUT: {
      return {
        ...state,
        loginStatus: action.payload
      }
    }

    case ACTION_USERNAME_CHANGED: {
      return {
        ...state,
        username: action.payload
      }
    }

    case ACTION_PASSWORD_CHANGED: {
      return {
        ...state,
        password: action.payload
      }
    }

    default:
      return state;
  }
};