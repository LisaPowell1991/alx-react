import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ id, type, html, value, markAsRead }) {
    return (
        value ?
            <li
                data-notification-type={type}
                onClick={() => markAsRead(id)}
            >{value}</li>
            :
            <li
                data-notification-type={type}
                dangerouslySetInnerHTML={html}
                onClick={() => markAsRead(id)}
            ></li>
    );
}

NotificationItem.propTypes = {
    id: PropTypes.number.isRequired,
    html: PropTypes.shape({ __html: PropTypes.string }),
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    markAsRead: PropTypes.func.isRequired,
};

NotificationItem.defaultProps = {
    type: 'default',
};

export default NotificationItem;