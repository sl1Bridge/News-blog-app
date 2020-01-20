export const ACTION_LOGIN_STATUS_CHANGED = 'ACTION_LOGIN_STATUS_CHANGED ';
export const ACTION_LOGOUT = 'ACTION_LOGOUT ';
export const ACTION_USERNAME_CHANGED = 'ACTION_USERNAME_CHANGED ';
export const ACTION_PASSWORD_CHANGED = 'ACTION_PASSWORD_CHANGED ';

export const changeLoginStatusActionCreator = () => ({
    type: ACTION_LOGIN_STATUS_CHANGED,
    payload: true
});

export const logOutActionCreator = () => ({
    type: ACTION_LOGOUT,
    payload: false
});

export const changeUsernameActionCreator = (newUsername) => ({
    type: ACTION_USERNAME_CHANGED,
    payload: newUsername
});

export const changePasswordActionCreator = (newPassword) => ({
    type: ACTION_PASSWORD_CHANGED,
    payload: newPassword
});