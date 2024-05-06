import { uiReducer, initialState } from "./uiReducer";
import { DISPLAY_NOTIFICATION_DRAWER } from "../actions/uiActionTypes";

describe('uiReducer', () => {
    it('should return the initial state when no action is passed', () => {
        expect(uiReducer(undefined, {})).toEqual(initialState);
    });

    it('should return the intial state when the action SELECT_COURSE is passed', () => {
        expect(uiReducer(initialState, { type: 'SELECT_COURSE' })).toEqual(initialState);
    });

    it('should set isNotificationDrawerVisible to true when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
        expect(uiReducer(initialState, { type: DISPLAY_NOTIFICATION_DRAWER })).toEqual({
            ...initialState,
            isNotificationDrawerVisible: true
        });
    });
})