/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Reference } from './Reference';

export type PrintGroup = {
    /**
     * Unique identifier.
     */
    id?: string;
    /**
     * Reference to the order associated with this PrintGroup.
     */
    orderRef?: Reference;
    /**
     * The print group heading that will be displayed on receipts.
     */
    name?: string;
    /**
     * The order in which this print group is displayed relative to other print groups on the same receipt. Print groups with identical sort orders will be ordered by name.
     */
    sortOrder?: number;
    /**
     * True if this print group has been sent to an order printer.
     */
    fired?: boolean;
    /**
     * Timestamp of when this print group should print or had printed relative to the merchant's Clover device system time.
     */
    printTime?: number;
};

