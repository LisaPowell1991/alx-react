/**
 * @jest-environment jsdom
 */

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

    it(" the CourseList component is included", () => {
        expect(wrapper.find('CourseList').exists());
    });
});

describe("Ctrl + H Keydown Event", () => {
    it("calls logOut function and shows 'Logging you out' alert", () => {
        const logOutMock = jest.fn();
        const alertSpy = jest.spyOn(window, "alert");
        const wrapper = mount(<App logOut={logOutMock} />);

        const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
        document.dispatchEvent(event);

        expect(logOutMock).toHaveBeenCalledTimes(1);
        expect(alertSpy).toHaveBeenCalledWith("Logging you out");

        alertSpy.mockRestore();
        wrapper.unmount();
    });
});