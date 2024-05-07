// notificationActionCreators.test.js
import { markAsRead, setNotificationFilter } from './notificationActionCreators';
import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes';

describe('markAsRead action creator', () => {
    it('should return the correct action object', () => {
        const index = 1;
        const action = markAsRead(index);
        expect(action).toEqual({ type: MARK_AS_READ, index });
    });
});

describe('setNotificationFilter action creator', () => {
    it('should return the correct action object with DEFAULT filter', () => {
        const filter = NotificationTypeFilters.DEFAULT;
        const action = setNotificationFilter(filter);
        expect(action).toEqual({ type: SET_TYPE_FILTER, filter });
    });

    it('should return the correct action object with URGENT filter', () => {
        const filter = NotificationTypeFilters.URGENT;
        const action = setNotificationFilter(filter);
        expect(action).toEqual({ type: SET_TYPE_FILTER, filter });
    });
});
