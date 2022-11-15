/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AdditionalCharge } from './AdditionalCharge';
import type { Authorization } from './Authorization';
import type { Credit } from './Credit';
import type { Customer } from './Customer';
import type { Discount } from './Discount';
import type { LineItem } from './LineItem';
import type { LineItemEvent } from './LineItemEvent';
import type { OrderType } from './OrderType';
import type { Payment } from './Payment';
import type { PrintGroup } from './PrintGroup';
import type { Reference } from './Reference';
import type { Refund } from './Refund';
import type { ServiceCharge } from './ServiceCharge';

export type Order = {
    /**
     * Unique identifier
     */
    id?: string;
    /**
     * Currency of this order. For example, "USD"
     */
    currency?: string;
    /**
     * List of customers associated with this order.
     */
    customers?: Array<Customer>;
    /**
     * The employee who took this order
     */
    employee?: Reference;
    /**
     * Total price of the order in cents
     */
    total?: number;
    /**
     * External reference id if present in the order
     */
    externalReferenceId?: string;
    /**
     * The net of orders with payment minus the amount collected. Includes refunds, manual refunds, tax, tip, service charge, non-revenue items, paid gift card activations and loads and discounts
     */
    unpaidBalance?: number;
    /**
     * Is this order paid or not?
     */
    paymentState?: Order.paymentState;
    title?: string;
    /**
     * An arbitrary string with information about this order, may be printed on the order receipt and displayed in apps
     */
    note?: string;
    orderType?: OrderType;
    /**
     * If true then this order should not have taxes applied to it
     */
    taxRemoved?: boolean;
    /**
     * This order was created by merchant with VAT enabled.
     */
    isVat?: boolean;
    /**
     * A String generally describing the state of the order. If no value is set, the state defaults to null, which indicates a hidden order. A hidden order is not displayed in user interfaces and can only be retrieved by its id. When creating an order via the REST API the value must be manually set to "open". When creating an order via the Android SDK the value must be left empty and the value will be updated to "open" and "locked" automatically when actions such as taking payments and adding line items occur. The state value is not checked or enforced by the Clover server, at this time it is used for visualization purposes only.
     */
    state?: string;
    /**
     * Whether this order represents a manual transaction. A manual transaction is a transaction that has an arbitrary amount defined and is not associated with any inventory items. For example, the Clover Sale App and Clover Manual Transaction App create manual transactions. A manual transactions will have a single associated line item to hold the sale amount, but the generated receipt will display this differently to indicate that it is not considered a typical order with inventory items.
     */
    manualTransaction?: boolean;
    /**
     * Whether similar line items should be grouped together on the receipt that this order generates. Item "similarity" is based on items having matching values for a set of properties including price, modifiers, and discounts.
     */
    groupLineItems?: boolean;
    /**
     * Whether this order was created in test mode. Payments made against test orders are not processed. Test mode orders can be deleted from the Orders App on the merchant's device or web dashboard (https://www.clover.com/orders/m/{mId}/orders). They will also be deleted when the device sends a POST to the /v2/merchant/{mId}/orders/delete_all_tests endpoint.
     */
    testMode?: boolean;
    /**
     * Possible values: SPLIT_GUEST, SPLIT_ITEM, SPLIT_CUSTOM, FULL. During the payment flow, if the user chooses to split the payment for this order, this field will be set to one of the SPLIT_* values to indicate how the full amount should be split. If the user chooses to pay for the order in full with one payment, then this field will be FULL.
     */
    payType?: Order.payType;
    /**
     * Creation timestamp
     */
    createdTime?: number;
    /**
     * The time at which the client created this order
     */
    clientCreatedTime?: number;
    /**
     * Last modified time of the order
     */
    modifiedTime?: number;
    deletedTimestamp?: number;
    /**
     * Optional service charge (gratuity) applied to this order
     */
    serviceCharge?: ServiceCharge;
    additionalCharges?: Array<AdditionalCharge>;
    /**
     * Amount or percentage discounts applied to the order subtotal. To retrieve discounts applied to individual items, use the Get all line items for an order endpoint with the discounts field expanded (v3/merchants/{mId}/orders/{orderId}/line_items?expand=discounts).
     */
    discounts?: Array<Discount>;
    /**
     * Line items associated with this order
     */
    lineItems?: Array<LineItem>;
    /**
     * Payments that were made for this order. If multiple payments were made, then the payType field should reflect the method used to split the total amount.
     */
    payments?: Array<Payment>;
    /**
     * Refunds that were made for this order
     */
    refunds?: Array<Refund>;
    /**
     * Credits associated with this order.
     */
    credits?: Array<Credit>;
    /**
     * Voided payments associated with this order
     */
    voids?: Array<Payment>;
    /**
     * Pre-authorizations associated with this order
     */
    preAuths?: Array<Payment>;
    /**
     * Device which created the order, a 128-bit UUID, not a normal base-13 Clover ID.
     */
    device?: Reference;
    /**
     * Card authorizations associated with this order
     */
    authorizations?: Array<Authorization>;
    merchant?: Reference;
    /**
     * Print groups for line items of this order.
     */
    printGroups?: Array<PrintGroup>;
    /**
     * Latest order fulfillment event of this order.
     */
    orderFulfillmentEvent?: LineItemEvent;
};

export namespace Order {

    /**
     * Is this order paid or not?
     */
    export enum paymentState {
        OPEN = 'OPEN',
        PAID = 'PAID',
        REFUNDED = 'REFUNDED',
        CREDITED = 'CREDITED',
        PARTIALLY_PAID = 'PARTIALLY_PAID',
        PARTIALLY_REFUNDED = 'PARTIALLY_REFUNDED',
    }

    /**
     * Possible values: SPLIT_GUEST, SPLIT_ITEM, SPLIT_CUSTOM, FULL. During the payment flow, if the user chooses to split the payment for this order, this field will be set to one of the SPLIT_* values to indicate how the full amount should be split. If the user chooses to pay for the order in full with one payment, then this field will be FULL.
     */
    export enum payType {
        SPLIT_GUEST = 'SPLIT_GUEST',
        SPLIT_ITEM = 'SPLIT_ITEM',
        SPLIT_CUSTOM = 'SPLIT_CUSTOM',
        FULL = 'FULL',
    }


}

