import React from 'react';
import { shallow, mount } from 'enzyme';
import { jest } from '@jest/globals';
import App from './App';

describe('Test App.js', () => {
    let wrapper;

    beforeEach(() => {
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

describe("Testing <App isLoggedIn={true} />", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App isLoggedIn={true} />);
    });

    it("the Login component is not included", () => {
        expect(wrapper.find('Login')).toHaveLength(0);
    });

    it("the CourseList component is included", () => {
        expect(wrapper.find('CourseList').exists());
    });
});

describe("Testing <App logOut={function} />", () => {
    it("verify that when the keys control and h are pressed the logOut function, passed as a prop, is called and the alert function is called with the string Logging you out", () => {
        const logOutMock = jest.fn();
        window.alert = jest.fn(); // Mock the alert function
        const wrapper = mount(<App logOut={logOutMock} />);

        // Simulate the keydown event
        const event = new KeyboardEvent('keydown', { bubbles: true, ctrlKey: true, key: 'h' });
        document.dispatchEvent(event);

        expect(window.alert).toHaveBeenCalledWith("Logging you out");
        expect(logOutMock).toHaveBeenCalled(); // Ensure logOutMock is called

        // Clean up
        window.alert.mockRestore();
    });
});