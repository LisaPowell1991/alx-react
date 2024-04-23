/**
 * @jest-environment jsdom
 */
import React from 'react';
import App from './App';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import { shallow, mount } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('App tests', () => {
	it('renders without crashing', () => {
		const component = shallow(<App />);

		expect(component).toBeDefined();
	});
	it('should render Notifications component', () => {
		const component = shallow(<App />);

		expect(component.containsMatchingElement(<Notifications />)).toEqual(false);
	});
	it('should render Header component', () => {
		const component = shallow(<App />);

		expect(component.contains(<Header />)).toBe(true);
	});

	it('should render Login Component', () => {
		const component = shallow(<App />);
		component.setState({ user: { isLoggedIn: false } });
		expect(component.find('BodySectionWithMarginBottom').dive().find('Login')).toHaveLength(1);
	});

	it('should render Footer component', () => {
		const component = shallow(<App />);

		expect(component.contains(<Footer />)).toBe(true);
	});
	it('does not render courselist if logged out', () => {
		const component = shallow(<App />);
		expect(component.state().user.isLoggedIn).toBe(false);
		expect(component.exists('CourseList')).toBe(false);
	});

	it('renders courselist if logged in', () => {
		const component = shallow(<App />);
		component.setState({ user: { isLoggedIn: true } });
		expect(component.state().user.isLoggedIn).toBe(true);
		expect(component.exists('CourseList')).toBe(true);
		expect(component.exists('Login')).toBe(false);
	});

	it('checks that the default state for displayDrawer is false', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.state().displayDrawer).toBe(false);
	});

	it('checks that after calling handleDisplayDrawer, the state is true', () => {
		const wrapper = shallow(<App />);
		wrapper.instance().handleDisplayDrawer();
		expect(wrapper.state().displayDrawer).toBe(true);
	});

	it('checks that after calling handleHideDrawer, the state is false', () => {
		const wrapper = shallow(<App />);
		wrapper.instance().handleDisplayDrawer(); // first set it to true
		wrapper.instance().handleHideDrawer(); // then set it to false
		expect(wrapper.state().displayDrawer).toBe(false);
	});

	it('checks that after calling logOut, the user is logged out', () => {
		const wrapper = shallow(<App />);
		wrapper.instance().logIn('test@test.com', 'password');
		wrapper.instance().logOut();
		expect(wrapper.state().user.isLoggedIn).toBe(false);
	});

	it('checks that after calling logIn, the user is logged in', () => {
		const wrapper = shallow(<App />);
		wrapper.instance().logIn('test@test.com', 'password');
		expect(wrapper.state().user.isLoggedIn).toBe(true);
	});
});

describe('When ctrl + h is pressed', () => {
	it('calls logOut function', () => {
		const wrapper = mount(<App />);
		const instance = wrapper.instance();
		jest.spyOn(instance, 'logOut');
		const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
		document.dispatchEvent(event);

		expect(instance.logOut).toHaveBeenCalledTimes(1);
		wrapper.unmount();
	});

	window.alert = jest.fn();
	it('checks that alert function is called', () => {
		const wrapper = mount(<App />);
		const spy = jest.spyOn(window, 'alert');
		const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
		document.dispatchEvent(event);

		expect(spy).toHaveBeenCalled();
		spy.mockRestore();
		wrapper.unmount();
	});

	it('checks that the alert is "Logging you out"', () => {
		const wrapper = mount(<App />);
		const spy = jest.spyOn(window, 'alert');
		const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
		document.dispatchEvent(event);

		expect(spy).toHaveBeenCalledWith('Logging you out');
		jest.restoreAllMocks();
		wrapper.unmount();
	});
	window.alert.mockClear();
});
