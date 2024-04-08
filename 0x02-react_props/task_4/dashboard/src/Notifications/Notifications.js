import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropeTypes from 'prop-types';

function Notifications({ displayDrawer }) {
    return (
        <>
            <div className="menuItem">
                Your notifications
            </div>
            {displayDrawer && (
                <div className="Notifications">
                    <button
                        style={{ color: "#3a3a3a", fontWeight: "bold", background: "none", border: "none", fontSize: "15px", float: "right", cursor: "pointer" }}
                        aria-label="Close"
                        onClick={() => console.log("Close button has been clicked")}
                    >
                        <img src={closeIcon} alt="Close" style={{ width: '20px', height: '20px' }} />
                    </button>
                    <ul>
                        <NotificationItem type="default" value="New course available" />
                        <NotificationItem type="urgent" value="New resume available" />
                        <NotificationItem type="urgent" html={getLatestNotification()} />
                    </ul>
                </div>
            )}
        </>
    );
};

Notifications.defaultProps = {
    displayDrawer: false
};

Notifications.propTypes = {
    displayDrawer: PropeTypes.bool
};

export default Notifications;