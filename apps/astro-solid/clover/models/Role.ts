/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Reference } from './Reference';

export type Role = {
    /**
     * Unique identifier
     */
    id?: string;
    /**
     * Full name of the role
     */
    name: string;
    /**
     * Base System Role
     */
    systemRole: Role.systemRole;
    /**
     * employees with this role
     */
    employeesRef?: Array<Reference>;
    /**
     * The merchant this role belongs to.
     */
    merchant?: Reference;
};

export namespace Role {

    /**
     * Base System Role
     */
    export enum systemRole {
        OWNER = 'OWNER',
        ADMIN = 'ADMIN',
        MANAGER = 'MANAGER',
        EMPLOYEE = 'EMPLOYEE',
    }


}

