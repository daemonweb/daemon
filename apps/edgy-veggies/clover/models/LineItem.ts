/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Discount } from './Discount';
import type { LineItemPayment } from './LineItemPayment';
import type { Modification } from './Modification';
import type { Reference } from './Reference';
import type { Refund } from './Refund';
import type { Tag } from './Tag';
import type { TaxRate } from './TaxRate';

export type LineItem = {
    /**
     * Unique identifier.
     */
    id?: string;
    /**
     * A reference to the inventory item that was used to create this line item. Note that since this a reference the item can be changed and deleted any time such that it no longer matches this line item.
     */
    item?: Reference;
    /**
     * Hex code representation of the color assigned to item in the form of #fff, #ffffff, or #ffffffff. Note that item color can be changed and deleted any time such that it no longer matches this line item
     */
    colorCode?: string;
    /**
     * Line item name.
     */
    name?: string;
    /**
     * Alternate name of the line item.
     */
    alternateName?: string;
    /**
     * Price of the item, typically in cents of merchant currency. When unit quantity is not null then this is the price for a single unit and is not the complete price.
     */
    price?: number;
    /**
     * Price of item after adding all modifications. This is used only for reporting.
     */
    priceWithModifiers?: number;
    /**
     * Price of item after adding all modifications and subtracting all line item and order level discounts. This is used only for reporting.
     */
    priceWithModifiersAndItemAndOrderDiscounts?: number;
    /**
     * Unit quantity if this line item is priced by quantity, or null if the item is not priced by quantity. The value is a fixed-point integer with scaling factor of 1000 (e.g. if charging by ounces then the value should be set to 2500 for 2.5 ounces). To compute the complete price perform the following calculation: PRICE * (UNIT QTY / 1000).
     */
    unitQty?: number;
    /**
     * Unit name (e.g. oz, lb, etc) if priced by unit, otherwise null.
     */
    unitName?: string;
    itemCode?: string;
    note?: string;
    /**
     * True if this line item has been printed out on an order printer at least once already.
     */
    printed?: boolean;
    exchangedLineItem?: Reference;
    binName?: string;
    userData?: string;
    createdTime?: number;
    orderClientCreatedTime?: number;
    /**
     * List of discounts applied to the line item. Each line item on an order may have zero or more percentage or amount discounts. Line item discounts are separate from order-level discounts (which are applied to the order subtotal).
     */
    discounts?: Array<Discount>;
    /**
     * List of order level discounts attributed to this line item. Amounts are rounded to the nearest penny. This is for reporting purposes only. These rounding approximates are not used when calculating the transaction.
     */
    orderLevelDiscounts?: Array<Discount>;
    /**
     * Unnamed fixed discount amount in cents. Or, in reporting, this may be the calculated sum of all the line item discounts.
     */
    discountAmount?: number;
    /**
     * The calculated sum of order level discounts attributed, approximately to the nearest cent, to this the line item. This is only used in reporting.
     */
    orderLevelDiscountAmount?: number;
    exchanged?: boolean;
    /**
     * List of references to modifications applied to this line item.
     */
    modifications?: Array<Modification>;
    /**
     * List of tags associated with this line item.
     */
    tags?: Array<Tag>;
    /**
     * True if this line item has been refunded
     */
    refunded?: boolean;
    /**
     * direct item refund
     */
    refund?: Refund;
    /**
     * True if this item should be counted as revenue, for example gift cards and donations would not.
     */
    isRevenue?: boolean;
    /**
     * Tax rates that apply to this line item
     */
    taxRates?: Array<TaxRate>;
    /**
     * Payments that apply to this line item
     */
    payments?: Array<LineItemPayment>;
    /**
     * Revenue collected for this. This field is only used in reporting.
     */
    revenueAmount?: number;
    /**
     * Quantity sold for this line item. This field is only used in reporting
     */
    quantitySold?: number;
    /**
     * Optional reference to the print group that this line item belongs to.
     */
    printGroup?: Reference;
};

