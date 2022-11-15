/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AppBundleCountry = {
    /**
     * Unique identifier
     */
    id?: string;
    price?: number;
    pricePerDevice?: number;
    /**
     * The country of the app bundle country
     */
    country?: string;
    /**
     * DB reference to app bundle that contains this app bundle country.
     */
    appBundle?: number;
};

