/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { VoidedItemsChartSummary } from './VoidedItemsChartSummary';

export type VoidedItemsSummary = {
    /**
     * number of printed line items deleted
     */
    printed?: number;
    /**
     * number of unprinted line items deleted
     */
    unprinted?: number;
    /**
     * sum of price of all the items, in cents of merchant currency.
     */
    price?: number;
    /**
     * sum of price of all the items, in cents of merchant currency multiplied by quantity.
     */
    priceWithQuantity?: number;
    /**
     * sum of price of all the items multiplied with quantity and includes modifiers.
     */
    priceWithQuantityAndModifiers?: number;
    /**
     * number of orders deleted
     */
    deletedOrders?: number;
    /**
     * number of line items deleted
     */
    deletedItems?: number;
    /**
     * summary of the chart data
     */
    chartSummary?: VoidedItemsChartSummary;
};

