/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Reference } from './Reference';

export type IdentityDocument = {
    /**
     * Unique identifier
     */
    id?: string;
    /**
     * Type of personal identification: National Document, Passport, etc
     */
    type?: string;
    /**
     * The identification number
     */
    number?: string;
    /**
     * Created timestamp.
     */
    createdTime?: number;
    /**
     * Modified timestamp.
     */
    modifiedTime?: number;
    /**
     * Deleted timestamp.
     */
    deletedTime?: number;
    payment?: Reference;
};

