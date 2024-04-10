import React from 'react';
import { shallow } from 'enzyme';
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

describe('Test keydown event', () => {
    let mockAlert;

    beforeEach(() => {
        mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => { });
    });

    afterEach(() => {
        mockAlert.mockRestore();
    });

    it('calls logOut and alert when "Control" and "h" keys are pressed', () => {
        const mockLogOut = jest.fn();
        const wrapper = shallow(<App logOut={mockLogOut} />);
        const event = {
            ctrlKey: true,
            key: 'h'
        };
        wrapper.instance().handleKeyDown(event);
        expect(mockLogOut).toHaveBeenCalled();
        expect(mockAlert).toHaveBeenCalledWith('Logging you out');
    });
});