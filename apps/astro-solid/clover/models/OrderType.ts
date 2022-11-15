/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HoursSet } from './HoursSet';
import type { Reference } from './Reference';

export type OrderType = {
    /**
     * Unique identifier
     */
    id?: string;
    /**
     * Label Key
     */
    labelKey?: string;
    /**
     * Label Key
     */
    label?: string;
    /**
     * If this order type is taxable
     */
    taxable?: boolean;
    /**
     * If this order type is the default
     */
    isDefault?: boolean;
    /**
     * If set to false, then this order type includes all of the merchant's categories. Otherwise, it only contains the categories defined in the "categories" field on this object.
     */
    filterCategories?: boolean;
    /**
     * If this order type is hidden on the register
     */
    isHidden?: boolean;
    /**
     * The price of a fee added to this order type, not fully implemented at this time.
     */
    fee?: number;
    /**
     * The minimum amount required for an order to be placed
     */
    minOrderAmount?: number;
    /**
     * The maximum amount for an order allowed
     */
    maxOrderAmount?: number;
    /**
     * The maximum radius allowed for an order (i.e. delivery)
     */
    maxRadius?: number;
    /**
     * The average time it takes to complete the order
     */
    avgOrderTime?: number;
    hoursAvailable?: OrderType.hoursAvailable;
    customerIdMethod?: OrderType.customerIdMethod;
    /**
     * If this order type is deleted
     */
    isDeleted?: boolean;
    /**
     * Optional system order type that this order type is associated with.
     */
    systemOrderTypeId?: string;
    /**
     * The hours this order type is available (if they differ from normal merchant hours)
     */
    hours?: HoursSet;
    /**
     * The categories of items that can be assigned to this order type
     */
    categories?: Array<Reference>;
};

export namespace OrderType {

    export enum hoursAvailable {
        ALL = 'ALL',
        BUSINESS = 'BUSINESS',
        CUSTOM = 'CUSTOM',
    }

    export enum customerIdMethod {
        NAME = 'NAME',
        TABLE = 'TABLE',
        NAME_TABLE = 'NAME_TABLE',
    }


}

