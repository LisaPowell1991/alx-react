import { Map } from 'immutable';
import {
    FETCH_NOTIFICATIONS_SUCCESS,
    MARK_AS_READ,
    SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';

export const initialNotificationState = Map({
    notifications: [],
    filter: 'DEFAULT',
});

const notificationReducer = (state = initialNotificationState, action) => {
    switch (action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS:
            return state.merge({
                notifications: notificationsNormalizer(action.data),
            });

        case MARK_AS_READ:
            return state.setIn(['notifications', action.index, 'isRead'], true);

        case SET_TYPE_FILTER:
            return state.set('filter', action.filter);

        default:
            return state;
    }

};

export default notificationReducer;