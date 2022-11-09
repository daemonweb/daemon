/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AppMeteredCountry } from './AppMeteredCountry';
import type { Reference } from './Reference';

export type AppMetered = {
    /**
     * Unique identifier
     */
    id?: string;
    /**
     * DEPRECATED: App metered amount. Instead use per country pricing in meteredCountries
     */
    amount?: number;
    /**
     * DEPRECATED: App metered action. Instead use per country pricing in meteredCountries
     */
    action?: string;
    /**
     * DEPRECATED: App metered active status. Instead use per country pricing in meteredCountries
     */
    active?: boolean;
    /**
     * Metered country options for this app metered
     */
    meteredCountries?: Array<AppMeteredCountry>;
    /**
     * Reference to the app this metered belongs to
     */
    app?: Reference;
    /**
     * A label used to identify this metered action
     */
    label?: string;
};

