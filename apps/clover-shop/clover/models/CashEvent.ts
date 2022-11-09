/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Device } from './Device';
import type { Employee } from './Employee';
import type { Reference } from './Reference';

export type CashEvent = {
    /**
     * The type of event that occurred
     */
    type?: CashEvent.type;
    /**
     * The amount that was either added, removed of modified by the event
     */
    amountChange?: number;
    /**
     * Time at which the event was executed
     */
    timestamp?: number;
    /**
     * Any additional information regarding the event
     */
    note?: string;
    /**
     * The employee who performed the event
     */
    employee?: Employee;
    /**
     * The device that initiated the event
     */
    device?: Device;
    /**
     * The event occurred for this merchant.
     */
    merchant?: Reference;
};

export namespace CashEvent {

    /**
     * The type of event that occurred
     */
    export enum type {
        LOAD = 'LOAD',
        TRANSACTION = 'TRANSACTION',
        OPEN = 'OPEN',
        ADJUSTMENT = 'ADJUSTMENT',
        COUNT = 'COUNT',
        UNLOAD = 'UNLOAD',
    }


}

