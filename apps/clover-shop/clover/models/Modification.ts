/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Modifier } from './Modifier';

export type Modification = {
    id?: string;
    /**
     * the name of the modifier when it was applied
     */
    name?: string;
    alternateName?: string;
    /**
     * the additional cost of the modifier when it was applied
     */
    amount?: number;
    /**
     * The modifier object.  Values from the Modifier are copied to the Modification at the time that the order is placed.  Modifier values may change after the modification is created.
     */
    modifier?: Modifier;
    /**
     * This is only used in reports. The count of how many of these modifiers that were sold.
     */
    quantitySold?: number;
};

