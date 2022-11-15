/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Reference } from './Reference';

export type Modifier = {
    /**
     * Unique identifier
     */
    id?: string;
    /**
     * Name of the modifier
     */
    name?: string;
    /**
     * Alternate name of the modifier
     */
    alternateName?: string;
    /**
     * True if this modifier is available across all channels
     */
    available?: boolean;
    /**
     * Additional cost when used
     */
    price?: number;
    modifierGroup?: Reference;
};

