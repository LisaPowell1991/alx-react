import React from 'react';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

const fadeInOut = {
	'0%': { opacity: 0.5 },
	'100%': { opacity: 1 },
};

const bounce = {
	'0%, 100%': { transform: 'translateY(0px)' },
	'50%': { transform: 'translateY(-5px)' },
};

const styles = StyleSheet.create({
	Notifications: {
		border: '2px dashed red',
		padding: '0.75em',
		fontSize: '20px',
		'@media (max-width: 800px)': {
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

	menuItem: {
		cursor: 'pointer',
		backgroundColor: '#fff8f8',
		position: 'fixed',
		right: 0,
		top: 0,
		zIndex: 9999,
		':hover': {
			animationName: [fadeInOut, bounce],
			animationDuration: '1s, 0.5s',
			animationIterationCount: '3, 3',
		},
	},

	notificationHeader: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	ul: {
		listStyleType: 'none',
	},
	button: {
		border: 'none',
		background: 'none',
		position: 'absolute',
		top: '1.75em',
		right: '1.75em',
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
						<div className={css(styles.Notifications)} data-testid="notifications">
							<div className='menuItem'>
								<h4>Here is the list of notification</h4>
							</div>
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
							<ul className={css(styles.ul)}>
								{this.props.listNotifications && this.props.listNotifications.length > 0 ? (
									this.props.listNotifications.map(({ id, html, type, value }) => (
										<NotificationItem
											key={id}
											markAsRead={this.markAsRead}
											type={type}
											value={value}
											html={html}
										/>
									))
								) : (
									<div className={css(styles.notificationHeader)}>
										<NotificationItem value='No new notification for now' />

									</div>
								)}
							</ul>
						</div>
					</div>
				) : (
					<div className={css(styles.menuItem)} style={{ display: this.props.displayDrawer ? 'none' : 'block' }}>
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
