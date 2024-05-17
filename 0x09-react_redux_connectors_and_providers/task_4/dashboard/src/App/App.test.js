import React from 'react';
import { shallow } from 'enzyme';
import { jest } from '@jest/globals';
import { App } from './App';
import { StyleSheetTestUtils } from 'aphrodite';
import { AppContext, user, logOut } from './AppContext';
import { mapStateToProps } from './App';
import { fromJS } from 'immutable';
import { createStore } from 'redux';
import { uiReducer } from '../reducers/uiReducer';
import { Provider } from 'react-redux';

describe('Test App.js', () => {
	let wrapper;

	beforeEach(() => {
		StyleSheetTestUtils.suppressStyleInjection();
		const store = createStore(uiReducer);
		wrapper = shallow(<App />);
	});

	it('Renders App without crashing', () => {
		expect(wrapper.exists());
	});

	it('App component contains Notifications component', () => {
		expect(wrapper.find("Notifications")).toHaveLength(1);
	});

	it('App component contains Header component', () => {
		expect(wrapper.find("Header")).toHaveLength(1);
	});

	it('App component contains Login component', () => {
		expect(wrapper.find("Login")).toHaveLength(1);
	});

	it('App component contains Footer component', () => {
		expect(wrapper.find("Footer")).toHaveLength(1);
	});

	it('test to check that CourseList is not displayed inside App', () => {
		expect(wrapper.find("CourseList")).toHaveLength(0);
	});
});

describe('Testing mapStateToProps', () => {
	it('test that verify that the function returns the right object', () => {
		let state = fromJS({
			ui: {
				isUserLoggedIn: true,
				isNotificationDrawerVisible: false,
			},
		});
		expect(mapStateToProps(state)).toEqual(expect.objectContaining({ isLoggedIn: true, displayDrawer: false }));
	});
});