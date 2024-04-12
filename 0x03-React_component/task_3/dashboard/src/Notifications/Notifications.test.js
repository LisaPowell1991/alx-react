import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('<Notifications />', () => {
    it('renders Notifications component without crashing', () => {
        shallow(<Notifications />);
    });

    it('first NotificationItem element renders the right html', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        const firstNotificationItem = wrapper.find(NotificationItem).first();
        expect(firstNotificationItem.html()).toContain('data-notification-type="default"');
        expect(firstNotificationItem.html()).toContain('New course available');
    });

    it('renders correct text', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('.menuItem').text()).toBe('Your notifications');
    });

    it('menu item is being displayed when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('.menuItem')).toHaveLength(1);
        expect(wrapper.find('.Notifications')).toHaveLength(0);
    });

    it('menu item is being displayed when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer />);
        expect(wrapper.find('.menuItem')).toHaveLength(1);
        expect(wrapper.find('.Notifications')).toHaveLength(1);
    });

    it('renders correctly if listNotifications is not passed or is an empty array', () => {
        const wrapper1 = shallow(<Notifications />);
        expect(wrapper1.find(NotificationItem)).toHaveLength(0);

        const wrapper2 = shallow(<Notifications listNotifications={[]} />);
        expect(wrapper2.find(NotificationItem)).toHaveLength(0);
    });

    it('calls markAsRead when NotificationItem is clicked', () => {
        const mockMarkAsRead = jest.fn();
        const wrapper = shallow(<Notifications />);
        wrapper.instance().markAsRead = mockMarkAsRead; // Override the method with mock
        wrapper.update(); // Force update the component to use the new mocked method

        const notificationItem = wrapper.find(NotificationItem).first();
        notificationItem.props().markAsRead(1); // Call the prop function

        expect(mockMarkAsRead).toHaveBeenCalledWith(1); // Check if the mock function got called with correct id
    });

    it('calls console.log with the right message when markAsRead is called', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        const wrapper = shallow(<Notifications />);
        const instance = wrapper.instance();

        instance.markAsRead(1);

        expect(consoleSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');

        consoleSpy.mockRestore();
    });
});