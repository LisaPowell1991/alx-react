import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchNotifications } from '../actions/notificationActionCreators';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css, keyframes } from 'aphrodite';
import closeIcon from '../assets/close-icon.png';

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
		padding: '1em 1.5em',
		fontSize: '20px',
		marginRight: '0.5em',
		marginBottom: '1em',
		'@media (max-width: 800px)': {
			width: '100%',
			height: '100%',
			position: 'fixed',
			top: '0',
			left: '0',
			zIndex: '9999',
			background: '#fff',
			overflow: 'auto',
			padding: '0.75em',
		},
	},
	menuItem: {
		cursor: 'pointer',
		backgroundColor: '#fff8f8',
		position: 'fixed',
		right: 0,
		top: 0,
		zIndex: 9999,
		padding: '0.25em',
		margin: '1em',
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
		padding: 0,
		'@media (max-width: 800px)': {
			listStyleType: 'none',
		},
	},
	button: {
		border: 'none',
		background: 'none',
		position: 'absolute',
		top: '1.75em',
		right: '1.75em',
	},
});

class Notifications extends PureComponent {
	componentDidMount() {
		this.props.fetchNotifications();
	}
	render() {
		return (
			<React.Fragment>
				{this.props.displayDrawer ? (
					<div className='flex-area'>
						<div className={css(styles.Notifications)} data-testid="notifications">
							<div className='menuItem'>
								<h4>Here is the list of notifications</h4>
							</div>
							<button
								className={css(styles.button)}
								onClick={this.props.handleHideDrawer}
								aria-label="Close"
								data-testid="close-button"
							>
								<img src={closeIcon} alt="close icon" />
							</button>
							<ul className={css(styles.ul)}>
								{this.props.listNotifications.length > 0 ? (
									this.props.listNotifications.map(({ id, html, type, value }) => (
										<NotificationItem
											key={id}
											markAsRead={() => this.props.markNotificationAsRead(id)}
											type={type}
											value={value}
											html={html}
										/>
									))
								) : (
									<NotificationItem value='No new notification for now' />
								)}
							</ul>
						</div>
					</div>
				) : (
					<div
						className={css(styles.menuItem)}
						onClick={this.props.handleDisplayDrawer}
						data-testid="menu-item"
					>
						<p>Your notifications</p>
					</div>
				)}
			</React.Fragment>
		);
	}
}

Notifications.propTypes = {
	displayDrawer: PropTypes.bool,
	handleDisplayDrawer: PropTypes.func.isRequired,
	handleHideDrawer: PropTypes.func.isRequired,
	listNotifications: PropTypes.arrayOf(NotificationItemShape),
	markNotificationAsRead: PropTypes.func,
	fetchNotifications: PropTypes.func.isRequired,
};

Notifications.defaultProps = {
	displayDrawer: false,
	handleDisplayDrawer: () => { },
	handleHideDrawer: () => { },
	listNotifications: [],
	markNotificationAsRead: () => { },
};

const mapStateToProps = state => ({
	listNotifications: state.ui.notifications,
});

const mapDispatchToProps = dispatch => ({
	fetchNotifications: () => dispatch(fetchNotifications()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
