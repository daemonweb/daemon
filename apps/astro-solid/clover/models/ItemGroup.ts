/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Reference } from './Reference';

export type ItemGroup = {
    /**
     * Unique identifier
     */
    id?: string;
    /**
     * Name of the option
     */
    name: string;
    /**
     * Items that are members of this group
     */
    items?: Array<Reference>;
    /**
     * Attributes that belong to this group
     */
    attributes?: Array<Reference>;
};

