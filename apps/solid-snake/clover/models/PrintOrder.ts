/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Reference } from './Reference';

export type PrintOrder = {
    /**
     * Unique identifier
     */
    id?: string;
    /**
     * Reference to the order to be printed
     */
    orderRef?: Reference;
    /**
     * The printing device. A 128-bit UUID, not a normal base-13 Clover ID.
     */
    readonly deviceRef?: Reference;
    /**
     * The print category
     */
    readonly category?: PrintOrder.category;
    /**
     * print event state
     */
    readonly state?: PrintOrder.state;
    /**
     * Snapshot of the order at the time of print request
     */
    readonly orderSnapshot?: string;
    /**
     * Timestamp when the print event was created
     */
    readonly createdTime?: number;
    /**
     * Timestamp when the print event was last modified
     */
    readonly modifiedTime?: number;
    /**
     * Timestamp when the print event was last deleted
     */
    readonly deletedTime?: number;
    /**
     * Timestamp when the print event needs to fire to printer
     */
    readonly printTime?: number;
};

export namespace PrintOrder {

    /**
     * The print category
     */
    export enum category {
        ORDER = 'ORDER',
        RECEIPT = 'RECEIPT',
        FISCAL = 'FISCAL',
        LABEL = 'LABEL',
        TEST_PRINT = 'TEST_PRINT',
    }

    /**
     * print event state
     */
    export enum state {
        CREATED = 'CREATED',
        PRINTING = 'PRINTING',
        FAILED = 'FAILED',
        DONE = 'DONE',
    }


}

