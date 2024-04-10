import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ type, html, value }) {
    return (
        value ?
            <li
                data-notification-type={type}
            >{value}</li>
            :
            <li
                data-notification-type={type}
                dangerouslySetInnerHTML={html}
            ></li>
    );
}

NotificationItem.propTypes = {
    html: PropTypes.shape({ __html: PropTypes.string }),
    type: PropTypes.string.isRequired,
    value: PropTypes.string
};

NotificationItem.defaultProps = {
    type: 'default',
};

export default NotificationItem;