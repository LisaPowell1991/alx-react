import React from 'react';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

const listCourses = [
	{ id: 1, name: 'ES6', credit: 60 },
	{ id: 2, name: 'Webpack', credit: 20 },
	{ id: 3, name: 'React', credit: 40 },
];

describe('CourseList component tests', () => {
	it('should render without crashing', () => {
		const wrapper = shallow(<CourseList />);

		expect(wrapper.exists()).toBe(true);
	});

	it('renders 5 different rows', () => {
		const wrapper = shallow(<CourseList />);

		expect(wrapper.find('tbody').children()).toHaveLength(5);
		expect(wrapper.find('tbody').childAt(0).dive().find('td').at(0).text()).toEqual('ES6');
		expect(wrapper.find('tbody').childAt(0).dive().find('td').at(1).text()).toEqual('60');
	});

	it('renders correctly when passed a list of courses', () => {
		const wrapper = shallow(<CourseList listCourses={listCourses} />);

		expect(wrapper.find('tbody').children()).toHaveLength(3);
		expect(wrapper.find('tbody').childAt(0).dive().find('td').at(0).text()).toEqual('ES6');
		expect(wrapper.find('tbody').childAt(0).dive().find('td').at(1).text()).toEqual('60');
	});
});
