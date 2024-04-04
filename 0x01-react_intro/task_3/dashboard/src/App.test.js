import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it('should render without crashing', () => {
        expect(wrapper).toBeDefined();
    });

    it('should render the header div', () => {
        expect(wrapper.find('.App-header').length).toBe(1);
    });

    it('should render the body div', () => {
        expect(wrapper.find('.App-body').length).toBe(1);
    });

    it('should render the footer div', () => {
        expect(wrapper.find('.App-footer').length).toBe(1);
    });

    it('should render the logo image', () => {
        expect(wrapper.find('img').prop('src')).toEqual('holberton-logo.jpg');
    });

    it('should display the correct footer text', () => {
        const currentYear = new Date().getFullYear();
        const expectedFooterText = `Copyright ${currentYear} - Holberton School`;

        expect(wrapper.find('.App-footer').text()).toEqual(expectedFooterText);
    });
});