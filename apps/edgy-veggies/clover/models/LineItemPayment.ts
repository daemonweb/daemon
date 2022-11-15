/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type LineItemPayment = {
    /**
     * Unique identifier; TBD this is confusing because it's used as either line item id or payment id
     */
    id?: string;
    /**
     * Percent of this line item covered by this payment
     */
    percentage?: number;
    /**
     * Bin this line item payment was for
     */
    binName?: string;
    /**
     * Payment has been refunded
     */
    refunded?: boolean;
};

