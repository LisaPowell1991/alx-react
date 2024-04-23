import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import Header from './Header';
import AppContext from '../App/AppContext';

StyleSheetTestUtils.suppressStyleInjection();

describe('Header', () => {
	it('render without crashing', () => {
		const wrapper = shallow(<Header />);
		expect(wrapper.exists()).toEqual(true);
	});

	it('should render a h1', () => {
		const wrapper = shallow(<Header />);
		expect(wrapper.exists('h1')).toEqual(true);
		expect(wrapper.containsMatchingElement(<h1>School dashboard</h1>)).toEqual(true);
	});

	it('should not render logoutSection when user is not defined', () => {
		const wrapper = shallow(
			<AppContext.Provider value={{ user: null }}>
				<Header />
			</AppContext.Provider>
		);
		expect(wrapper.find('#logoutSection')).toHaveLength(0);
	});

	it('should render logoutSection when user is defined', () => {
		const wrapper = shallow(
			<AppContext.Provider value={{ user: { isLoggedIn: true, email: 'test@test.com' } }}>
				<Header />
			</AppContext.Provider>
		);
		expect(wrapper.find('#logoutSection')).toHaveLength(1);
	});

	it('should call the logOut function when the logout link is clicked', () => {
		const logOutSpy = jest.fn();
		const wrapper = shallow(
			<AppContext.Provider value={{ user: { isLoggedIn: true, email: 'test@test.com' }, logOut: logOutSpy }}>
				<Header />
			</AppContext.Provider>
		);
		wrapper.find(Header).dive().find('#logoutSection a').simulate('click');
		expect(logOutSpy).toHaveBeenCalled();
	});
});