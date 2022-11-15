/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Reference } from './Reference';

export type Employee = {
    /**
     * Unique identifier
     */
    id?: string;
    /**
     * Full name of the employee
     */
    name: string;
    /**
     * Nickname of the employee (shows up on receipts)
     */
    nickname?: string;
    /**
     * Custom ID of the employee
     */
    customId?: string;
    /**
     * Email of the employee (optional)
     */
    email?: string;
    /**
     * Returns true if this employee was sent an invite to activate their account
     */
    inviteSent?: boolean;
    /**
     * Timestamp of when this employee claimed their account
     */
    claimedTime?: number;
    /**
     * Timestamp of when this employee was deleted
     */
    deletedTime?: number;
    /**
     * Employee PIN (hashed)
     */
    pin?: string;
    /**
     * Employee PIN
     */
    unhashedPin?: string;
    /**
     * Employee System Role
     */
    role?: Employee.role;
    roles?: Array<Reference>;
    /**
     * Returns true if this employee is the owner account for this merchant
     */
    isOwner?: boolean;
    /**
     * This employee's shifts
     */
    shifts?: Array<Reference>;
    /**
     * This employee's payments
     */
    payments?: Array<Reference>;
    /**
     * This employee's orders
     */
    orders?: Array<Reference>;
    /**
     * This employee's employee cards
     */
    employeeCards?: Array<Reference>;
    /**
     * The merchant employing this employee
     */
    merchant?: Reference;
};

export namespace Employee {

    /**
     * Employee System Role
     */
    export enum role {
        OWNER = 'OWNER',
        ADMIN = 'ADMIN',
        MANAGER = 'MANAGER',
        EMPLOYEE = 'EMPLOYEE',
    }


}

