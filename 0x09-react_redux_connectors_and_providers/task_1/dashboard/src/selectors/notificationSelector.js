import { createSelector } from 'reselect';
import { Map } from 'immutable';

// Selector for filterTypeSelected
export const filterTypeSelected = state => state.notitifications.filter;

// Selector for getNotifications
export const getNotifications = state => new Map(state.notitifications.list.map(item => [item.id, item]));

// Selector for getUnreadNotifications
export const getUnreadNotifications = createSelector(
    getNotifications,
    notitifications => new Map([...notitifications].filter(([id, notification]) => !notification.isRead))
);