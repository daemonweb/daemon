/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Option } from './Option';
import type { Reference } from './Reference';

export type Attribute = {
    /**
     * Unique identifier
     */
    id?: string;
    /**
     * Name of this attribute
     */
    name: string;
    /**
     * The item group this attribute belongs to
     */
    itemGroup: Reference;
    /**
     * Options associated with this attribute
     */
    options?: Array<Option>;
};

