import React from 'react';
import CourseListRow from './CourseListRow';
import { shallow } from 'enzyme';
import { rowStyle, headerRowStyle } from './CourseListRow';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('Course List Row component test', () => {
	it('should render without crashing', () => {
		const wrapper = shallow(<CourseListRow textFirstCell='test' />);

		expect(wrapper.exists()).toBe(true);
	});

	it('should render one cell with colspan = 2 when textSecondCell null', () => {
		const wrapper = shallow(
			<CourseListRow
				isHeader={true}
				textFirstCell='test'
				textSecondCell={null}
			/>
		);

		const thElement = <th className="th_13y7u7t" colSpan={2}>test</th>;
		expect(wrapper.contains(thElement)).toEqual(true);
	});

	it('should render two cells when textSecondCell not null', () => {
		const wrapper = shallow(
			<CourseListRow
				isHeader={false}
				textFirstCell='test'
				textSecondCell='test 2'
			/>
		);

		expect(wrapper.find('td')).toHaveLength(2);
		expect(wrapper.find('td').at(0).html()).toContain('test');
		expect(wrapper.find('td').at(1).html()).toContain('test 2');
	});

	it('applies the correct style for header rows', () => {
		const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Test" />);
		expect(wrapper.find('tr').prop('style')).toEqual(headerRowStyle);
	});

	it('applies the correct style for non-header rows', () => {
		const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="Test" />);
		expect(wrapper.find('tr').prop('style')).toEqual(rowStyle);
	});
});
