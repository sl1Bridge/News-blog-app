export const ACTION_LOGIN_STATUS_CHANGED = 'ACTION_LOGIN_STATUS_CHANGED ';

export const changeLoginStatusActionCreator = () => {
  return {
    type: ACTION_LOGIN_STATUS_CHANGED,
    payload: true
  }
};