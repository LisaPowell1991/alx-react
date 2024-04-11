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
        expect(wrapper1.find('.menuItem')).toHaveLength(1);
        expect(wrapper1.find('.Notifications')).toHaveLength(0);

        const wrapper2 = shallow(<Notifications displayDrawer listNotifications={[]} />);
        expect(wrapper2.find('.menuItem')).toHaveLength(1);
        expect(wrapper2.find('.Notifications')).toHaveLength(1);
    });


    it('renders listNotifications correctly and with the right number of NotificationItem', () => {
        const notifications = [
            { id: 1, type: 'default', value: 'New course available' },
            { id: 2, type: 'urgent', value: 'New resume available' },
            { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong>' } },
        ];
        const wrapper = shallow(<Notifications displayDrawer listNotifications={notifications} />);
        expect(wrapper.find('.menuItem')).toHaveLength(1);
        expect(wrapper.find('.Notifications')).toHaveLength(1);
        expect(wrapper.find(NotificationItem)).toHaveLength(notifications.length);
    });
});