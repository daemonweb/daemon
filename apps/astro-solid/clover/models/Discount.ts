/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Reference } from './Reference';

export type Discount = {
    /**
     * Unique identifier
     */
    id?: string;
    /**
     * If this item is based on a standard discount, this will point to the appropriate inventory.Discount
     */
    discount?: Reference;
    /**
     * The person that authorized a discount
     */
    approver?: Reference;
    /**
     * Name of the discount
     */
    name: string;
    /**
     * Discount amount in fraction of currency unit (e.g. cents) based on currency fraction digits supported
     */
    amount?: number;
    /**
     * Discount amount in percent
     */
    percentage?: number;
};

