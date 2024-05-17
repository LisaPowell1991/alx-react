import { fromJS } from 'immutable';
import notificationReducer, {
    initialNotificationState,
} from './notificationReducer';
import { notificationsNormalizer } from '../schema/notifications'; // Add this line

import {
    FETCH_NOTIFICATIONS_SUCCESS,
    MARK_AS_READ,
    SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';

describe('notificationReducer', function () {
    it('initial state', function () {
        const state = notificationReducer(undefined, {});
        expect(state).toEqual(initialNotificationState);
    });

    it('FETCH_NOTIFICATIONS_SUCCESS', function () {
        const action = {
            type: FETCH_NOTIFICATIONS_SUCCESS,
            data: [
                {
                    id: 1,
                    type: 'default',
                    value: 'New course available',
                },
                {
                    id: 2,
                    type: 'urgent',
                    value: 'New resume available',
                },
                {
                    id: 3,
                    type: 'urgent',
                    value: 'New data available',
                },
            ],
        };

        const normalizedData = notificationsNormalizer(action.data);

        const expectedData = fromJS({
            filter: 'DEFAULT',
            notifications: normalizedData,
        });

        const state = notificationReducer(undefined, action);
        expect(state.toJS()).toEqual(expectedData.toJS());
    });

    it('MARK_AS_READ', function () {
        const initialState = fromJS({
            filter: 'DEFAULT',
            notifications: {
                1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
                2: { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
                3: { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
            },
        });

        const action = {
            type: MARK_AS_READ,
            index: 2,
        };

        const expectedData = initialState.setIn(['notifications', 2, 'isRead'], true);

        const state = notificationReducer(initialState, action);
        expect(state.toJS()).toEqual(expectedData.toJS());
    });

    it('SET_TYPE_FILTER', function () {
        const initialState = fromJS({
            filter: 'DEFAULT',
            notifications: {
                1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
                2: { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
                3: { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
            },
        });

        const action = {
            type: SET_TYPE_FILTER,
            filter: 'URGENT',
        };

        const expectedData = initialState.set('filter', 'URGENT');

        const state = notificationReducer(initialState, action);
        expect(state.toJS()).toEqual(expectedData.toJS());
    });
});