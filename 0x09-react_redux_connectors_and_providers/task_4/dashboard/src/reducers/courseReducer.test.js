import { fromJS } from 'immutable';
import courseReducer from "./courseReducer";
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { coursesNormalizer } from '../schema/courses';

describe('courseReducer', () => {
    it('should return the initial state', () => {
        expect(courseReducer(undefined, {}).toJS()).toEqual({});
    });

    it('should handle FETCH_COURSE_SUCCESS', () => {
        const courses = [
            { id: 1, name: 'ES6', isSelected: false, credit: 60 },
            { id: 2, name: 'Webpack', isSelected: false, credit: 20 },
            { id: 3, name: 'React', isSelected: false, credit: 40 }
        ];
        expect(courseReducer(undefined, { type: FETCH_COURSE_SUCCESS, data: courses }).toJS()).toEqual(coursesNormalizer(courses).entities.courses);
    });

    it('should handle SELECT_COURSE and UNSELECT_COURSE', () => {
        const initialState = fromJS({
            "1": { id: 1, name: 'ES6', isSelected: false, credit: 60 },
            "2": { id: 2, name: 'Webpack', isSelected: false, credit: 20 },
            "3": { id: 3, name: 'React', isSelected: false, credit: 40 }
        });
        const expectedState = fromJS({
            "1": { id: 1, name: 'ES6', isSelected: false, credit: 60 },
            "2": { id: 2, name: 'Webpack', isSelected: true, credit: 20 },
            "3": { id: 3, name: 'React', isSelected: false, credit: 40 }
        });
        expect(courseReducer(initialState, { type: SELECT_COURSE, index: "2" }).toJS()).toEqual(expectedState.toJS());
        const newState = expectedState.setIn(["2", 'isSelected'], false);
        expect(courseReducer(newState, { type: UNSELECT_COURSE, index: "2" }).toJS()).toEqual(initialState.toJS());
    });
});