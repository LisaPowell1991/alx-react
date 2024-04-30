import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";

// Action creater for log in
export const login = (email, password) => ({
    type: LOGIN,
    user: { email, password }
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