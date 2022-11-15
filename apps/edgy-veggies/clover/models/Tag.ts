/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Reference } from './Reference';

export type Tag = {
    /**
     * Unique identifier
     */
    id?: string;
    /**
     * Tag name
     */
    name: string;
    /**
     * True if tag is a summary label in the reporting app
     */
    showInReporting?: boolean;
    /**
     * Items associated with this tag
     */
    items?: Array<Reference>;
    /**
     * Printers associated with this tag
     */
    printers?: Array<Reference>;
};

