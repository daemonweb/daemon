/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Reference } from './Reference';

export type AppNotification = {
    /**
     * The app the notification will be sent to. This will be autopopulated by the server.
     */
    app?: Reference;
    event?: string;
    /**
     * The time to live of the notification in seconds. By default this is 5 days.
     */
    timeToLive?: number;
    /**
     * Payload of the notification. This is at most 4000 characters.
     */
    data?: string;
};

