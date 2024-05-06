import fetch from 'node-fetch';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from "./uiActionTypes";

// Action creator for log in
export const login = (email, password) => ({
    type: LOGIN,
    user: { email, password }
});

// Action creator for login success
export const loginSuccess = () => ({
    type: LOGIN_SUCCESS
});

// Action creator for login failure
export const loginFailure = () => ({
    type: LOGIN_FAILURE
});

// Action creater for log out
export const logout = () => ({
    type: LOGOUT
});

// Action creater for displaying the notification drawer
export const displayNotificationDrawer = () => ({
    type: DISPLAY_NOTIFICATION_DRAWER
});

// Action creater for hiding the notification drawer
export const hideNotificationDrawer = () => ({
    type: HIDE_NOTIFICATION_DRAWER
});

// Bind the action creators to the dispatch method
export const boundlogin = (email, password) => dispatch(login(email, password));
export const boundlogout = () => dispatch(logout());
export const bounddisplayNotificationDrawer = () => dispatch(displayNotificationDrawer());
export const boundhideNotificationDrawer = () => dispatch(hideNotificationDrawer());
export const boundloginSuccess = () => dispatch(loginSuccess());
export const boundloginFailure = () => dispatch(loginFailure());

// Login request function
export const loginRequest = (email, password) => {
    return async (dispatch) => {
        dispatch(login(email, password));

        try {
            const response = await fetch('http://localhost:8564/login-success.json');
            if (response.ok) {
                dispatch(loginSuccess());
            } else {
                dispatch(loginFailure());
            }
        } catch (error) {
            dispatch(loginFailure());
        }
    };
};