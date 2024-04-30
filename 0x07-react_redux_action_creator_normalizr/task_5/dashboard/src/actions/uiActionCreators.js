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