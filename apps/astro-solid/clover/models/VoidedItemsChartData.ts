/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type VoidedItemsChartData = {
    /**
     * name of revenue class
     */
    revenueClassName?: string;
    /**
     * sum of price of all the items, in cents of merchant currency multiplied by quantity.
     */
    priceWithQuantity?: number;
    /**
     * sum of price of all the items multiplied with quantity and includes modifiers.
     */
    priceWithQuantityAndModifiers?: number;
    /**
     * number of line item in this revenue class
     */
    count?: number;
};

