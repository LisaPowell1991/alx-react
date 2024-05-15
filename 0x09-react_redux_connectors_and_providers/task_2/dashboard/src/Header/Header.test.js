import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header'; // import the unconnected component

describe('Header', () => {
	const userLoggedOut = { isLoggedIn: false };
	const userLoggedIn = { isLoggedIn: true, email: 'test@test.com' };

	it('should render without crashing', () => {
		const wrapper = shallow(<Header user={userLoggedOut} />);
		expect(wrapper.exists()).toEqual(true);
	});

	it('should render a h1', () => {
		const wrapper = shallow(<Header user={userLoggedOut} />);
		expect(wrapper.find('h1').exists()).toBeTruthy();
		expect(wrapper.containsMatchingElement(<h1>School dashboard</h1>)).toBeTruthy();
	});

	it('should not render logoutSection when user is not defined', () => {
		const wrapper = shallow(<Header user={null} />);
		expect(wrapper.find('#logoutSection').length).toEqual(0);
	});

	it('should render logoutSection when user is defined', () => {
		const wrapper = shallow(<Header user={userLoggedIn} />);
		expect(wrapper.find('#logoutSection').length).toEqual(1);
	});
});