import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import AppContext from '../App/AppContext';

describe('Header', () => {
	const contextValueLoggedOut = { user: { isLoggedIn: false } };
	const contextValueLoggedIn = { user: { isLoggedIn: true, email: 'test@test.com' }, logOut: jest.fn() };

	const shallowWithProvider = (value) =>
		shallow(
			<AppContext.Provider value={value}>
				<Header />
			</AppContext.Provider>
		).dive(); // This might need to be adjusted if the structure of your component changes

	it('should render without crashing', () => {
		const wrapper = shallowWithProvider(contextValueLoggedOut);
		expect(wrapper.exists()).toEqual(true);
	});

	it('should render a h1', () => {
		const wrapper = shallowWithProvider(contextValueLoggedOut);
		expect(wrapper.find('h1').exists()).toBeTruthy();
		expect(wrapper.containsMatchingElement(<h1>School dashboard</h1>)).toBeTruthy();
	});

	it('should not render logoutSection when user is not defined', () => {
		const wrapper = shallowWithProvider({ user: null });
		expect(wrapper.find('#logoutSection').length).toEqual(0);
	});

	it('should render logoutSection when user is defined', () => {
		const wrapper = shallowWithProvider(contextValueLoggedIn);
		expect(wrapper.find('#logoutSection').length).toEqual(1);
	});

	it('should call the logOut function when the logout link is clicked', () => {
		const logOutSpy = contextValueLoggedIn.logOut;
		const wrapper = shallowWithProvider(contextValueLoggedIn);

		const logoutLink = wrapper.find('#logoutSection a');
		expect(logoutLink.length).toEqual(1); // Make sure the link is being rendered

		logoutLink.simulate('click');
		expect(logOutSpy).toHaveBeenCalled();
	});
});

