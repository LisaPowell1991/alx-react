import { Map } from 'immutable';
import rootReducer from './rootReducer';

describe('rootReducer', () => {
    it('initializes the correct state', () => {
        const expectedState = {
            course: Map(),
            notification: Map(),
            ui: Map(),
        };

        expect(rootReducer(undefined, {})).toEqual(expectedState);
    });
});