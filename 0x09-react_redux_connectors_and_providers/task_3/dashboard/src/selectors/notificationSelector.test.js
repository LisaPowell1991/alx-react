import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('Notification Selector', () => {
    const state = {
        notifications: {
            filter: 'DEFAULT',
            list: [
                { id: 1, type: 'default', value: 'New course available' },
                { id: 2, type: 'urgent', value: 'New resume available' },
                { id: 3, type: 'urgent', value: 'New data available' }
            ],
        },
    };
    it('filterTypeSelected', () => {
        const result = filterTypeSelected(state);
        expect(result).toEqual('DEFAULT');
    });

    it('getNotifications returns a list of the message enitities within the reducer', () => {
        const result = getNotifications(state);
        expect(result).toEqual({
            1: { id: 1, type: 'default', value: 'New course available' },
            2: { id: 2, type: 'urgent', value: 'New resume available' },
            3: { id: 3, type: 'urgent', value: 'New data available' },
        });
    })

    it('getUnreadNotifications returns a list of the message entities within the reducer that are unread', () => {
        const result = getUnreadNotifications(state);
        expect(result).toEqual({
            1: { id: 1, type: 'default', value: 'New course available' },
            2: { id: 2, type: 'urgent', value: 'New resume available' },
            3: { id: 3, type: 'urgent', value: 'New data available' },
        });
    });
});