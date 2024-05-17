import { Map } from 'immutable';
import {
    FETCH_NOTIFICATIONS_SUCCESS,
    MARK_AS_READ,
    SET_TYPE_FILTER,
    SET_LOADING_STATE,
} from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';

export const initialNotificationState = Map({
    notifications: Map({
        entities: Map(),
        result: [],
    }),
    filter: 'DEFAULT',
    loading: false,
});

const notificationReducer = (state = initialNotificationState, action) => {
    switch (action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS:
            return state.mergeDeep({
                notifications: notificationsNormalizer(action.notifications),
            });

        case MARK_AS_READ:
            return state.setIn(['notifications', 'entities', action.index, 'isRead'], true);

        case SET_TYPE_FILTER:
            return state.set('filter', action.filter);

        case SET_LOADING_STATE:
            return state.set('loading', action.isLoading);

        default:
            return state;
    }
};

export default notificationReducer;