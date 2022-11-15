/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Reference } from './Reference';

export type LineItemEvent = {
    /**
     * Unique Clover identifier.
     */
    id?: string;
    /**
     * The event type. This is a String and not an enum because its expected that only clients understand event types, and clients may introduce new types only they understand.
     */
    type: string;
    /**
     * Reference to the order which this is associated.
     */
    orderId: string;
    /**
     * A reference to the line item which this is associated.
     */
    lineItemId?: string;
    /**
     * The time this event was created as supplied by the client. Measured in milliseconds since the Unix epoch.
     */
    clientCreatedTime: number;
    /**
     * The time this event was recorded to the backend. Not to be filled in by the client.
     */
    createdTime?: number;
    /**
     * Reference to its parent line item event
     */
    parentLineItemEvent?: Reference;
};

