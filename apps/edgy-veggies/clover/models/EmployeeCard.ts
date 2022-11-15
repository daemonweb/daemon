/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Reference } from './Reference';

export type EmployeeCard = {
    /**
     * Unique identifier
     */
    id?: string;
    /**
     * The merchant the card belongs to
     */
    merchant?: Reference;
    /**
     * The employee who the card is currently assigned to
     */
    employee?: Reference;
    /**
     * The employee who last updated the card's state
     */
    updater?: Reference;
    /**
     * Unique number on the employee card.
     */
    number?: string;
    /**
     * Current status of the employee card
     */
    status?: EmployeeCard.status;
    /**
     * Timestamp of when this employee card was created
     */
    createdTime?: number;
    /**
     * Timestamp of when this employee card was last updated
     */
    modifiedTime?: number;
};

export namespace EmployeeCard {

    /**
     * Current status of the employee card
     */
    export enum status {
        ACTIVE = 'ACTIVE',
        DISABLED = 'DISABLED',
    }


}

