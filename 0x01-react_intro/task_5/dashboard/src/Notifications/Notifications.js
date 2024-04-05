import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from '../utils/utils';

function Notifications() {
    return (
        <div className='Notifications'>
            <button
                style={{ color: "#3a3a3a", fontWeight: "bold", background: "none", border: "none", fontSize: "15px", float: "right", cursor: "pointer" }}
                aria-label="Close"
                onClick={() => console.log("Close button has been clicked")}
            >
                <img src={closeIcon} alt="Close" style={{ width: '20px', height: '20px' }} />
            </button>
            <div style={{ clear: 'both' }}></div>
            <p>Here is the list of notifications</p>
            <ul>
                <li data='default'>New course available</li>
                <li data='urgent'>New resume available</li>
                <li data='urgent' dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
            </ul>
        </div>
    );
}

export default Notifications;