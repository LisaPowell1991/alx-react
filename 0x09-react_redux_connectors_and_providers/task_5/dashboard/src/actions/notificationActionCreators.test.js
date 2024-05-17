// notificationActionCreators.js
import { SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from './notificationActionTypes';

export const setLoadingState = (isLoading) => ({
    type: SET_LOADING_STATE,
    isLoading
});

export const setNotifications = (notifications) => ({
    type: FETCH_NOTIFICATIONS_SUCCESS,
    notifications
});

export const fetchNotifications = () => async (dispatch) => {
    dispatch(setLoadingState(true));
    try {
        const response = await fetch('/notifications.json');
        const data = await response.json();
        dispatch(setNotifications(data));
    } catch (error) {
        console.error('Failed to fetch notifications:', error);
    } finally {
        dispatch(setLoadingState(false));
    }
};