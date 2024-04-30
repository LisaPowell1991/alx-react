import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";
import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from "./uiActionCreators";

describe('login action creator', () => {
    it('should return the correct action object', () => {
        const email = 'test@example.com';
        const password = 'password123';
        const action = login(email, password);
        expect(action).toEqual({
            type: LOGIN,
            user: { email, password }
        });
    });
});

describe('logout action creator', () => {
    it('should return the correct action object', () => {
        const action = logout();
        expect(action).toEqual({
            type: LOGOUT
        });
    });
});

describe('displayNotificationDrawer action creator', () => {
    it('should return the correct action object', () => {
        const action = displayNotificationDrawer();
        expect(action).toEqual({
            type: DISPLAY_NOTIFICATION_DRAWER
        });
    });
});

describe('hideNotificationDrawer action creator', () => {
    it('should return the correct action object', () => {
        const action = hideNotificationDrawer();
        expect(action).toEqual({
            type: HIDE_NOTIFICATION_DRAWER
        });
    });
});