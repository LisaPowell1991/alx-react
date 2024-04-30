import { selectCourse, unSelectCourse } from "./courseActionCreators";
import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

describe('selectCourse action creator', () => {
    it('should return the correct action object', () => {
        const index = 1;
        const action = selectCourse(index);
        expect(action).toEqual({
            type: SELECT_COURSE,
            payload: { index }
        })

    })
})

describe('unSelectCourse action creator', () => {
    it('should return the correct action object', () => {
        const index = 1;
        const action = unSelectCourse(index);
        expect(action).toEqual({
            type: UNSELECT_COURSE,
            payload: { index }
        })
    })
})