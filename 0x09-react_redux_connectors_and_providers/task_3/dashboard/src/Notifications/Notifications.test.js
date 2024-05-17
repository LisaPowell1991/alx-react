import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

const listNotifications = [
	{ id: 1, type: 'default', value: 'New course available' },
	{ id: 2, type: 'urgent', value: 'New resume available' },
	{ id: 3, type: 'urgent', html: getLatestNotification() },
];

describe('Notification tests', () => {
	it('renders Notification component without crashing', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper).toBeDefined();
	});

	it('renders correct list items', () => {
		const listNotifications = [
			{ id: 1, type: 'default', value: 'New course available' },
			{ id: 2, type: 'urgent', value: 'New resume available' },
			{ id: 3, type: 'urgent', html: '<strong>Urgent Requirement</strong> - complete by EOD' },
		];
		const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
		expect(wrapper.find('ul').children()).toHaveLength(listNotifications.length);
		wrapper.find(NotificationItem).forEach((node, index) => {
			expect(node.type()).toEqual(NotificationItem);
			const expectedContent = listNotifications[index].value || listNotifications[index].html;
			expect(node.prop('type')).toEqual(listNotifications[index].type);
			expect(node.prop('value') || node.prop('html')).toEqual(expectedContent);
		});
	});


	it('renders an unordered list', () => {
		const wrapper = shallow(
			<Notifications
				displayDrawer={true}
				listNotifications={listNotifications}
			/>
		);
		expect(wrapper.find('ul').children()).toHaveLength(3);
	});

	it('displays menu item when displayDrawer is false', () => {
		const wrapper = shallow(<Notifications displayDrawer={false} />);
		expect(wrapper.find('[data-testid="menu-item"]').exists()).toBe(true);
	});

	it('does not display notifications when displayDrawer is false', () => {
		const wrapper = shallow(<Notifications displayDrawer={false} />);
		expect(wrapper.find('[data-testid="notifications"]').exists()).toBe(false);
	});

	it('displays Notifications when displayDrawer is true', () => {
		const wrapper = shallow(<Notifications displayDrawer={true} />);
		expect(wrapper.find('[data-testid="notifications"]').exists()).toBe(true);
	});

	it('calls markNotificationAsRead when NotificationItem is clicked', () => {
		const markNotificationAsRead = jest.fn();
		const wrapper = shallow(
			<Notifications
				displayDrawer={true}
				listNotifications={listNotifications}
				markNotificationAsRead={markNotificationAsRead}
			/>
		);
		const firstItem = wrapper.find(NotificationItem).first();
		firstItem.prop('markAsRead')();
		expect(markNotificationAsRead).toHaveBeenCalledWith(listNotifications[0].id);
	});

	it('calls handleDisplayDrawer when menu item is clicked', () => {
		const handleDisplayDrawer = jest.fn();
		const wrapper = shallow(<Notifications handleDisplayDrawer={handleDisplayDrawer} displayDrawer={false} />);
		wrapper.find('[data-testid="menu-item"]').simulate('click');
		expect(handleDisplayDrawer).toHaveBeenCalled();
	});

	it('calls handleHideDrawer when close button is clicked', () => {
		const handleHideDrawer = jest.fn();
		const wrapper = shallow(<Notifications displayDrawer={true} handleHideDrawer={handleHideDrawer} />);
		wrapper.find('[data-testid="close-button"]').simulate('click');
		expect(handleHideDrawer).toHaveBeenCalled();
	});
});