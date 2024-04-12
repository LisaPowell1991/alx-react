import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

class Notifications extends React.Component {
    constructor(props) {
        super(props);
        this.markAsRead = this.markAsRead.bind(this);
    }

    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`);
    }

    render() {
        const { displayDrawer } = this.props;
        return (
            <>
                <div className='header-container'>
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
                                <NotificationItem id={1} type="default" value="New course available" markAsRead={this.markAsRead} />
                                <NotificationItem id={2} type="urgent" value="New resume available" markAsRead={this.markAsRead} />
                                <NotificationItem id={3} type="urgent" html={getLatestNotification()} markAsRead={this.markAsRead} />
                            </ul>
                        </div>
                    )}
                </div>
            </>
        );
    }
}

Notifications.defaultProps = {
    displayDrawer: false
};

Notifications.propTypes = {
    displayDrawer: PropTypes.bool
};

export default Notifications;