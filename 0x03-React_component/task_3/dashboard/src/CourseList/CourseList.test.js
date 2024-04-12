import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';
import CourseList from './CourseList';

describe('<CourseList />', () => {
    it('renders CourseList component without crashing', () => {
        shallow(<CourseList />);
    });

    it('renders different rows', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.find(CourseListRow)).toHaveLength(3);
    });
});