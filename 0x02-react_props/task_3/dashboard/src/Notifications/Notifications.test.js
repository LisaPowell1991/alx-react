import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('<Notifications />', () => {
    it('renders without crashing', () => {
        shallow(<Notifications />);
    });

    it('renders ul', () => {
        const notification = shallow(<Notifications />);
        expect(notification.find('ul')).toBeDefined();
    });

    it('renders three NotificationItem elements', () => {
        const notification = shallow(<Notifications />);
        expect(notification.find(NotificationItem)).toHaveLength(3);
    });

    it('first NotificationItem element renders the right html', () => {
        const wrapper = shallow(<Notifications />);
        const firstNotificationItem = wrapper.find(NotificationItem).first();
        expect(firstNotificationItem.html()).toContain('data-notification-type="default"');
        expect(firstNotificationItem.html()).toContain('New course available');
    });

    it('renders correct text', () => {
        const notification = shallow(<Notifications />);
        expect(notification.find('p').text()).toBe(
            'Here is the list of notifications'
        );
    });
});