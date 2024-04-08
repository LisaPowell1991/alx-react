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
});