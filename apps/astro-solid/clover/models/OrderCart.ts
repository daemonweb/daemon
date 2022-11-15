/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Discount } from './Discount';
import type { LineItem } from './LineItem';
import type { OrderType } from './OrderType';
import type { Reference } from './Reference';
import type { ServiceCharge } from './ServiceCharge';

export type OrderCart = {
    /**
     * Unique identifier
     */
    id?: string;
    /**
     * Currency of this order. For example, "USD"
     */
    currency?: string;
    title?: string;
    /**
     * An arbitrary string with information about this order, may be printed on the order receipt and displayed in apps
     */
    note?: string;
    /**
     * The time at which the client created this order
     */
    clientCreatedTime?: number;
    /**
     * Optional service charge (gratuity) applied to this order
     */
    serviceCharge?: ServiceCharge;
    /**
     * Amount or percentage discounts applied to the order subtotal. To retrieve discounts applied to individual items, use the Get all line items for an order endpoint with the discounts field expanded (v3/merchants/{mId}/orders/{orderId}/line_items?expand=discounts).
     */
    discounts?: Array<Discount>;
    /**
     * Line items associated with this order
     */
    lineItems?: Array<LineItem>;
    orderType?: OrderType;
    merchant?: Reference;
    /**
     * Whether similar line items should be grouped together on the receipt that this order generates. Item "similarity" is based on items having matching values for a set of properties including price, modifiers, and discounts.
     */
    groupLineItems?: boolean;
};

