import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";
import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from "./uiActionCreators";

const configureMockStore = require('redux-mock-store');
const thunk = require('redux-thunk');
const fetchMock = require('fetch-mock');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

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

describe('loginRequest action', () => {
    afterEach(() => {
        fetchMock.restore();
    });

    it('dispatches LOGIN and LOGIN_SUCCESS actions on successful API call', () => {
        fetchMock.getOnce('/login-success.json', {
            status: 200,
            body: { success: true },
        });

        const expectedActions = [
            { type: LOGIN },
            { type: LOGIN_SUCCESS },
        ];
        const store = mockStore({});

        return store.dispatch(loginRequest('test@example.com', 'password'))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
    });

    it('dispatches LOGIN and LOGIN_FAILURE actions on failed API call', () => {
        fetchMock.getOnce('/login-success.json', {
            status: 500,
            body: { success: false },
        });

        const expectedActions = [
            { type: LOGIN },
            { type: LOGIN_FAILURE },
        ];
        const store = mockStore({});

        return store.dispatch(loginRequest('test@example.com', 'password'))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
    });
});