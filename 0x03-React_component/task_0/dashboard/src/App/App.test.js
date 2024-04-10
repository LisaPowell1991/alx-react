import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';

describe('<App />', () => {
    it('renders App component without crashing', () => {
        shallow(<App />);
    });

    it('CourseList is not displayed', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(CourseList)).toHaveLength(0);
        expect(wrapper.find(Login)).toHaveLength(1);
    });

    describe('when isLoggedIn is true', () => {
        it('Login component is not included', () => {
            const wrapper = shallow(<App isLoggedIn={true} />);
            expect(wrapper.find(Login)).toHaveLength(0);
        });

        it('CourseList component is included', () => {
            const wrapper = shallow(<App isLoggedIn={true} />);
            expect(wrapper.find(CourseList)).toHaveLength(1);
        });
    });
});