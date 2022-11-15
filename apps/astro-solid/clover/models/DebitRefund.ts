/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DebitRefund = {
    /**
     * The final route that the payment took, which is obtained from the RC response
     */
    creditDebitRouteIndicator?: string;
    /**
     * True, if creditDebitRouteIndicator is C, else, its determined by the EDS entitlement rule
     */
    merchantEntitledForDebitRefunds?: boolean;
};

