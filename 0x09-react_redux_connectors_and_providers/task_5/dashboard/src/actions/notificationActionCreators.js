import { MARK_AS_READ, SET_TYPE_FILTER, SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from "./notificationActionTypes";
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

// Action creator for fetching notifications
export const fetchNotifications = () => async (dispatch) => {
    dispatch({ type: SET_LOADING_STATE, isLoading: true });
    try {
        const response = await fetch('/notifications.json');
        const data = await response.json();
        dispatch({ type: FETCH_NOTIFICATIONS_SUCCESS, notifications: data });
    } catch (error) {
        console.error('Failed to fetch notifications:', error);
    } finally {
        dispatch({ type: SET_LOADING_STATE, isLoading: false });
    }
};

// Bind the action creators to the dispatch method
export const boundMarkAsRead = (index) => dispatch(markAsRead(index));
export const boundsetNotificationFilter = (filter) => dispatch(setNotificationFilter(filter));