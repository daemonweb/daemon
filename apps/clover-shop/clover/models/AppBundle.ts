/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AppBundleCountry } from './AppBundleCountry';
import type { Reference } from './Reference';

export type AppBundle = {
    /**
     * Unique identifier
     */
    id?: string;
    /**
     * The name of the bundle
     */
    name?: string;
    /**
     * DEPRECATED: Instead use per country pricing in bundleCountries
     */
    price?: number;
    /**
     * DEPRECATED: Instead use per country pricing in bundleCountries
     */
    pricePerDevice?: number;
    includedApps?: Array<Reference>;
    /**
     * Bundle country options for this app bundle
     */
    bundleCountries?: Array<AppBundleCountry>;
};

