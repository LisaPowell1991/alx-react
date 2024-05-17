import { Map } from 'immutable';
import { coursesNormalizer } from '../schema/courses';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

// Initial state
const initialState = Map();

export default function courseReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_COURSE_SUCCESS: {
            // Normalize the data and merge it with the current state
            const normalizedData = coursesNormalizer(action.data);
            return state.mergeDeep(normalizedData.entities.courses)
        }

        case SELECT_COURSE:
        case UNSELECT_COURSE: {
            // Use the setIn function to update the value of the item at the specified index
            return state.setIn([action.index, 'isSelected'], action.type === SELECT_COURSE);
        }

        default:
            return state;
    }
}