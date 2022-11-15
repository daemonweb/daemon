/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AppTracking } from './AppTracking';
import type { GermanInfo } from './GermanInfo';
import type { Reference } from './Reference';
import type { TransactionInfo } from './TransactionInfo';

export type CreditRefund = {
    /**
     * Unique identifier
     */
    id?: string;
    /**
     * The order with which the refund is associated
     */
    orderRef?: Reference;
    /**
     * Device which processed the transaction for this refund, a 128-bit UUID, not a normal base-13 Clover ID.
     */
    device?: Reference;
    /**
     * The time when the refund was recorded on the server
     */
    createdTime?: number;
    /**
     * The time when the refund was recorded on the client
     */
    clientCreatedTime?: number;
    /**
     * The credit with which the credit refund is associated
     */
    credit?: Reference;
    employee?: Reference;
    /**
     * German region-specific information
     */
    germanInfo?: GermanInfo;
    /**
     * Tracking information for the app that created this payment.
     */
    appTracking?: AppTracking;
    /**
     * Transaction information
     */
    transactionInfo?: TransactionInfo;
};

