import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';
import CourseList from './CourseList';

describe('<CourseList />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<CourseList />);
    });

    it('renders CourseList component without crashing', () => {
        expect(wrapper).toBeTruthy();
    });

    describe('With CourseList Empty', () => {
        beforeEach(() => {
            wrapper.setProps({ listCourses: [] });
        });

        it('renders correctly if listCourses is not passed or is an empty array', () => {
            expect(wrapper.find(CourseListRow)).toHaveLength(3);
        });
    });

    describe('With CourseList containing elements', () => {
        const courses = [
            { id: 1, name: 'Course 1', credit: 60 },
            { id: 2, name: 'Course 2', credit: 40 },
        ];

        beforeEach(() => {
            wrapper.setProps({ listCourses: courses });
        });

        it('renders listCourses correctly when passed', () => {
            expect(wrapper.find(CourseListRow)).toHaveLength(courses.length + 2);
        });
    });
});