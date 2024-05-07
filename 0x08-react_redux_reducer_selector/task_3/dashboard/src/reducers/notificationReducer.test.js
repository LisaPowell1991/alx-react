import notificationReducer from "../reducers/notificationReducer";
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from "../actions/notificationActionTypes";

describe('notificationReducer', () => {
    const initialState = {
        notifications: [],
        filter: 'DEFAULT',
    };

    it('handles FETCH_NOTIFICATIONS_SUCCESS', () => {
        const action = {
            type: FETCH_NOTIFICATIONS_SUCCESS,
            data: [{ id: 1 }, { id: 2 }]
        };
        const expectedState = {
            notifications: [{ id: 1, isRead: false }, { id: 2, isRead: false }],
            filter: 'DEFAULT',
        };
        expect(notificationReducer(initialState, action)).toEqual(expectedState);
    });

    it('handles MARK_AS_READ', () => {
        const initialState = {
            notifications: [{ id: 1, isRead: false }, { id: 2, isRead: false }],
            filter: 'DEFAULT',
        };
        const action = {
            type: MARK_AS_READ,
            index: 1
        };
        const expectedState = {
            notifications: [{ id: 1, isRead: true }, { id: 2, isRead: false }],
            filter: 'DEFAULT',
        };
        expect(notificationReducer(initialState, action)).toEqual(expectedState);
    });

    it('handles SET_TYPE_FILTER', () => {
        const action = {
            type: SET_TYPE_FILTER,
            filter: 'URGENT'
        };
        const expectedState = {
            notifications: [],
            filter: 'URGENT',
        };
        expect(notificationReducer(initialState, action)).toEqual(expectedState);
    });

    it('handles default case', () => {
        const action = { type: 'UNKNOWN_ACTION' };
        expect(notificationReducer(initialState, action)).toEqual(initialState);
    });
});