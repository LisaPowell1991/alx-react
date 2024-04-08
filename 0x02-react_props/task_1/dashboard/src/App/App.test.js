import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';

describe('<App />', () => {
    const wrapper = shallow(<App />);

    it('should render without crashing', () => {
        expect(wrapper).toBeDefined();
    });

    it('should contain the Notifications component', () => {
        expect(wrapper.find(Notifications)).toHaveLength(1);
    });

    it('should contain the Header component', () => {
        expect(wrapper.find(Header)).toHaveLength(1);
    });

    it('should contain the Login component', () => {
        expect(wrapper.find(Login)).toHaveLength(1);
    });

    it('should contain the Footer component', () => {
        expect(wrapper.find(Footer)).toHaveLength(1);
    });
});