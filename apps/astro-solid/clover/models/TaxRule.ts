/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Item } from './Item';
import type { Merchant } from './Merchant';
import type { OrderType } from './OrderType';
import type { TaxRate } from './TaxRate';

export type TaxRule = {
    /**
     * Unique identifier
     */
    id?: string;
    /**
     * Name of Tax Rule
     */
    name: string;
    /**
     * The merchant the tax rule belongs to
     */
    merchant?: Merchant;
    /**
     * Order Type which to apply the tax rule
     */
    orderType?: OrderType;
    /**
     * Tax rates associated with this rule
     */
    rates?: Array<TaxRate>;
    /**
     * Items associated with this rule
     */
    items?: Array<Item>;
    /**
     * Timestamp when the tax rule was created
     */
    createdTime?: number;
    /**
     * Timestamp when the tax rule was last modified
     */
    modifiedTime?: number;
    /**
     * Timestamp when tax rule was last deleted
     */
    deletedTime?: number;
};

