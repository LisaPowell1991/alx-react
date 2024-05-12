import { Map } from 'immutable';
import { uiReducer, initialState } from './uiReducer';
import { SELECT_COURSE, DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';

describe('uiReducer', () => {
    it('returns the initial state when no action is passed', () => {
        expect(uiReducer(undefined, {}).toJS()).toEqual(initialState.toJS());
    });

    it('returns the initial state when SELECT_COURSE action is passed', () => {
        expect(uiReducer(initialState, { type: SELECT_COURSE }).toJS()).toEqual(initialState.toJS());
    });

    it('changes isNotificationDrawerVisible to true when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
        expect(uiReducer(initialState, { type: DISPLAY_NOTIFICATION_DRAWER }).toJS()).toEqual(
            initialState.set('isNotificationDrawerVisible', true).toJS()
        );
    });
});