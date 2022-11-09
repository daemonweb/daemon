/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrderCart } from './OrderCart';

export type OrderCheckoutRequest = {
    /**
     * The order cart to put items, discounts, modifications and order-related information
     */
    orderCart?: OrderCart;
};

