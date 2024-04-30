import { MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";

// Action creator for marking a notification as read
export const markAsRead = (index) => ({
    type: MARK_AS_READ,
    index
});

// Action creator for setting the type filter
export const setNotificationFilter = (filter) => ({
    type: SET_TYPE_FILTER,
    filter
});