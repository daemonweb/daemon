/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Reference } from './Reference';

export type AppMeteredCountry = {
    /**
     * Unique identifier
     */
    id?: string;
    /**
     * App metered action
     */
    action: string;
    /**
     * The cost of the metered country
     */
    amount: number;
    /**
     * The country of the metered country
     */
    country: string;
    /**
     * App metered country active status
     */
    active?: boolean;
    /**
     * Reference to metered this metered country belongs to
     */
    appMetered?: Reference;
    /**
     * List of locale specific metered country resources.
     */
    locales?: Array<Reference>;
};

