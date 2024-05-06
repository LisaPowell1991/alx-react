import courseReducer from "./courseReducer";
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "../actions/courseActionTypes";

describe('courseReducer', () => {
    it('should return the initial state', () => {
        expect(courseReducer(undefined, {})).toEqual([]);
    });

    it('should handle FETCH_COURSE_SUCCESS', () => {
        const courses = [
            { id: 1, name: 'ES6', isSelected: false, credit: 60 },
            { id: 2, name: 'Webpack', isSelected: false, credit: 20 },
            { id: 3, name: 'React', isSelected: false, credit: 40 }
        ];
        expect(courseReducer([], { type: FETCH_COURSE_SUCCESS, data: courses })).toEqual(courses);
    });

    it('should handle SELECT_COURSE', () => {
        const initialState = [
            { id: 1, name: 'ES6', isSelected: false, credit: 60 },
            { id: 2, name: 'Webpack', isSelected: false, credit: 20 },
            { id: 3, name: 'React', isSelected: false, credit: 40 }
        ];
        const expectedState = [
            { id: 1, name: 'ES6', isSelected: false, credit: 60 },
            { id: 2, name: 'Webpack', isSelected: true, credit: 20 },
            { id: 3, name: 'React', isSelected: false, credit: 40 }
        ];
        expect(courseReducer(initialState, { type: SELECT_COURSE, index: 2 })).toEqual(expectedState);
    });

    it('should handle UNSELECT_COURSE', () => {
        const initialState = [
            { id: 1, name: 'ES6', isSelected: false, credit: 60 },
            { id: 2, name: 'Webpack', isSelected: true, credit: 20 },
            { id: 3, name: 'React', isSelected: false, credit: 40 }
        ];
        const expectedState = [
            { id: 1, name: 'ES6', isSelected: false, credit: 60 },
            { id: 2, name: 'Webpack', isSelected: false, credit: 20 },
            { id: 3, name: 'React', isSelected: false, credit: 40 }
        ];
        expect(courseReducer(initialState, { type: UNSELECT_COURSE, index: 2 })).toEqual(expectedState);
    });
});