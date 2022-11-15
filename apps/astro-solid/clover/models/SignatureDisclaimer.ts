/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SignatureDisclaimer = {
    disclaimerText?: string;
    /**
     * Values that will be substituted in standard disclaimer text (txn date/time, account number, product label, etc.
     */
    disclaimerValues?: {
        default?: string;
    };
};

