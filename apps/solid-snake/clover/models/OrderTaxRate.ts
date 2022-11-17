/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LineItem } from './LineItem';

export type OrderTaxRate = {
    id?: string;
    name: string;
    amount: number;
    /**
     * Rate in percentage for this order tax rate
     */
    rate?: number;
    /**
     * Line item associated with this order tax rate
     */
    lineItems?: Array<LineItem>;
};

