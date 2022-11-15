/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Tender = {
    /**
     * Unique identifier
     */
    id?: string;
    /**
     * If this merchant tender is editable
     */
    editable?: boolean;
    /**
     * Label Key
     */
    labelKey?: string;
    /**
     * Label Key
     */
    label?: string;
    /**
     * If this tender opens the cash drawer
     */
    opensCashDrawer?: boolean;
    /**
     * Allow tipping on payment from tender
     */
    supportsTipping?: boolean;
    /**
     * If this merchant tender is enabled
     */
    enabled?: boolean;
    /**
     * If this merchant tender is visible
     */
    visible?: boolean;
    /**
     * Label Key
     */
    instructions?: string;
};

