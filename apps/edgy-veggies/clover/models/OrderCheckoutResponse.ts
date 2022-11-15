/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrderCart } from './OrderCart';
import type { OrderTaxRate } from './OrderTaxRate';

export type OrderCheckoutResponse = {
    /**
     * The order cart to put items, discounts, modifications and order-related information
     */
    orderCart?: OrderCart;
    /**
     * Total price of the order in cents
     */
    total?: number;
    /**
     * Subtotal price of the order in cents
     */
    subtotal?: number;
    /**
     * Amount of the total tax of the order in cents
     */
    totalTaxAmount?: number;
    taxSummaries?: Array<OrderTaxRate>;
    /**
     * If checkout by merchant with VAT enabled
     */
    isVat?: boolean;
};

