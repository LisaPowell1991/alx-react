import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('<CourseListRow />', () => {
    it('renders one cell with colspan = 2 when isHeader is true and textSecondCell does not exist', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Test" />);
        expect(wrapper.find('th')).toHaveLength(1);
        expect(wrapper.find('th').prop('colSpan')).toEqual('2');
    });

    it('renders two cells when isHeader is true and textSecondCell is present', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Test" textSecondCell="Test 2" />);
        expect(wrapper.find('th')).toHaveLength(2);
    });

    it('renders correctly two td elements within a tr element when isHeader is false', () => {
        const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="Test" textSecondCell="Test 2" />);
        expect(wrapper.find('td')).toHaveLength(2);
    });
});