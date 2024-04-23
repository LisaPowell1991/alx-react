import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
	default: {
		color: 'blue',
		'@media (max-width: 800px)': {
			width: '100%',
			borderBottom: '1px solid black',
			fontSize: '20px',
			padding: '10px 8px',
		},
	},
	urgent: {
		color: 'red',
		'@media (max-width: 800px)': {
			width: '100%',
			borderBottom: '1px solid black',
			fontSize: '20px',
			padding: '10px 8px',
		},
	},
});

class NotificationItem extends React.PureComponent {
	render() {
		const { type, value, html, markAsRead, id } = this.props;
		return (
			<React.Fragment>
				{type && value ? (
					<li onClick={() => markAsRead(id)}
						className={css(type === 'urgent' ? styles.urgent : styles.default)}
						data-notification-type={type}>
						{value}
					</li>
				) : null}
				{html ? (
					<li
						onClick={() => markAsRead(id)}
						className={css(styles.urgent)}
						data-urgent
						dangerouslySetInnerHTML={{ __html: html }}
					></li>
				) : null}
			</React.Fragment>
		);
	}
}

NotificationItem.propTypes = {
	type: PropTypes.string.isRequired,
	value: PropTypes.string,
	__html: PropTypes.shape({
		html: PropTypes.string,
	}),
};

NotificationItem.defaultProps = {
	type: 'default',
};

export default NotificationItem;
