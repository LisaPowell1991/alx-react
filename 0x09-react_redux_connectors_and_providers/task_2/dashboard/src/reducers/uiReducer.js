import { Map } from "immutable";
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions/uiActionTypes";

export const initialState = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: null, // Set initial user state to null
});

export default function uiReducer(state = initialState, action) {
    switch (action.type) {
        case DISPLAY_NOTIFICATION_DRAWER:
            return state.set(
                'isNotificationDrawerVisible', true
            );
        case HIDE_NOTIFICATION_DRAWER:
            return state.set(
                'isNotificationDrawerVisible', false
            );
        case LOGIN_SUCCESS:
            return state
                .set('isUserLoggedIn', true)
                .set('user', action.user); // Set user to the one passed within the action
        case LOGIN_FAILURE:
        case LOGOUT:
            return state
                .set('isUserLoggedIn', false)
                .set('user', null); // Set user to null upon logout
        default:
            return state;
    }
}