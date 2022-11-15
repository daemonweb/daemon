/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Reference } from './Reference';

export type ItemStock = {
    /**
     * Reference to an item
     */
    item?: Reference;
    /**
     * Deprecated, use quantity instead.
     */
    stockCount?: number;
    /**
     * Current count of this item in stock.
     */
    quantity?: number;
    modifiedTime?: number;
};

