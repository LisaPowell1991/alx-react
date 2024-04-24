// Footer.test.js
import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import { getFullYear, getFooterCopy } from '../utils/utils';

describe('Footer test', () => {
	it('should render without crashing', () => {
		const wrapper = shallow(<Footer />);
		expect(wrapper.exists()).toEqual(true);
	});

	it('should render the correct copyright text', () => {
		const wrapper = shallow(<Footer user={{ isLoggedIn: false }} />);
		expect(wrapper.text()).toContain(`Copyright ${getFullYear()} - ${getFooterCopy()}`);
	});

	it('should not display the Contact us link when user is logged out', () => {
		const wrapper = shallow(<Footer user={{ isLoggedIn: false }} />);
		expect(wrapper.find('a').length).toEqual(0);
	});

	it('should display the Contact us link when user is logged in', () => {
		const wrapper = shallow(<Footer user={{ isLoggedIn: true }} />);
		expect(wrapper.find('a').length).toEqual(1);
		expect(wrapper.find('a').text()).toContain('Contact us');
	});
});
