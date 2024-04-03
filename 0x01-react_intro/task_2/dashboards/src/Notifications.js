import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';

function Notifications() {
    return (
        <div className='Notifications'>
            <p>Here is the list of notifications</p>
            <button
                style={{ display: 'inline', position: 'absolute', right: '1rem', top: '1rem', background: 'white', border: 'none', cursor: 'pointer' }}
                aria-label='Close'
                onClick={() => console.log('Close button has been clicked')}
            >
                <img src={closeIcon} alt="Close" style={{ width: '10px', height: '10px' }} />
            </button>
            <ul>
                <li data='default'>New course available</li>
                <li data='urgent'>New resume available</li>
                <li data='urgent' dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
            </ul>
        </div>
    );
}

export default Notifications;