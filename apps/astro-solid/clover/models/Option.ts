/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Reference } from './Reference';

export type Option = {
    /**
     * Unique identifier
     */
    id?: string;
    /**
     * Name of the option
     */
    name: string;
    attribute?: Reference;
    /**
     * Items associated with this option
     */
    items?: Array<Reference>;
};

