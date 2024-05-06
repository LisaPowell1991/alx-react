import * as notifications from '../../notifications.json';
import { normalize, schema } from 'normalizr';

// Function to get all notifications for a specific user
export function getAllNotificationsByUser(userId) {
    // Get the notifications and messages from the normalized data
    const notificationsData = normalizedNotifications.entities.notifications;
    const messagesData = normalizedNotifications.entities.messages;

    // Create an array to store selected notifications
    const selectedNotifications = [];

    // Loop through each notification
    for (const property in notificationsData) {
        // Check if the notification's author is the same as the userId
        if (notificationsData[property].author === userId) {
            // If it is, add the notification's context (message) to the selectedNotifications array
            selectedNotifications.push(messagesData[notificationsData[property].context]);
        }
    }

    // Return the selected notifications
    return selectedNotifications;
}

// Define the schema for normalization
const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, {
    idAttribute: 'guid',
});
const notification = new schema.Entity('notifications', {
    author: user,
    context: message
});

// Normalize the notifications data
export const normalizedNotifications = normalize(notifications.default, [notification]);