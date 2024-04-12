import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('<Notifications />', () => {
    it('menu item is displayed when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.find('.menuItem')).toHaveLength(1);
    });

    it('div.Notifications is not displayed when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.find('.Notifications')).toHaveLength(0);
    });

    it('menu item is displayed when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('.menuItem')).toHaveLength(1);
    });

    it('div.Notifications is displayed when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('.Notifications')).toHaveLength(1);
    });

    it('calls markAsRead with the right ID when clicked', () => {
        const markAsReadSpy = jest.fn();
        const wrapper = shallow(<NotificationItem id={1} markAsRead={markAsReadSpy} />);

        wrapper.find('li').simulate('click');

        expect(markAsReadSpy).toHaveBeenCalledWith(1);
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