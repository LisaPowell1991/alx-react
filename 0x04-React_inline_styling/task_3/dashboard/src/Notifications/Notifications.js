import React from 'react';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
	Notifications: {
		border: '2px dashed red',
		padding: '0',
		fontSize: '20px',
		'@media (max-width: 900px)': {
			width: '100%',
			height: '100%',
			position: 'fixed',
			top: '0',
			left: '0',
			zIndex: '9999',
			background: '#fff',
			overflow: 'auto',
		},
	},
	button: {
		border: 'none',
		background: 'none',
		position: 'absolute',
		top: '0',
		right: '0',
	},
	notificationHeader: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	menuItem: {
		textAlign: 'right',
	},
	ul: {
		listStyleType: 'none',
	},
});

class Notifications extends React.Component {
	constructor(props) {
		super(props);
		this.markAsRead = this.markAsRead.bind(this);
	}

	shouldComponentUpdate(nextProps) {
		return nextProps.length > this.props.listNotifications.length;
	}

	markAsRead(id) {
		console.log(`Notification ${id} has been marked as read`);
	}

	render() {
		return (
			<React.Fragment>
				{this.props.displayDrawer ? (
					<div className='flex-area'>
						<div className='menuItem'>
							<p>Here is the list of notification</p>
						</div>
						<div className={css(styles.Notifications)} data-testid="notifications">
							<ul className={css(styles.ul)}>
								{this.props.listNotifications &&
									this.props.listNotifications.length > 0 ? (
									this.props.listNotifications.map(
										({ id, html, type, value }) => (
											<NotificationItem
												key={id}
												markAsRead={this.markAsRead}
												type={type}
												value={value}
												html={html}
											/>
										)
									)
								) : (
									<div className={css(styles.notificationHeader)}>
										<NotificationItem value='No new notification for now' />
										<button style={{
											color: '#3a3a3a',
											fontWeight: 'bold',
											background: 'none',
											border: 'none',
											fontSize: '15px',
											position: 'absolute',
											right: '3px',
											top: '3px',
											cursor: 'pointer',
											outline: 'none',
										}}
											aria-label="Close"
											className={css(styles.button)}
											onClick={(e) => {
												console.log('Close button has been clicked');
											}}
										>
											<img src={closeIcon} alt="close icon" width="15px" />
										</button>
									</div>
								)}
							</ul>
						</div>
					</div>
				) : (
					<div className='menuItem'>
						<p>Your notifications</p>
					</div>
				)}
			</React.Fragment>
		);
	}
}

Notifications.propTypes = {
	displayDrawer: PropTypes.bool,
	listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
	displayDrawer: false,
	listNotifications: [],
};

export default Notifications;
