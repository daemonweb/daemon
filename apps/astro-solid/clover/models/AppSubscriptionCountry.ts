/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Reference } from './Reference';

export type AppSubscriptionCountry = {
    /**
     * Unique identifier
     */
    id?: string;
    /**
     * App subscription country name
     */
    name: string;
    /**
     * The cost of the subscription country
     */
    amount: number;
    /**
     * The country of the subscription country
     */
    country: string;
    /**
     * App subscription country name
     */
    description: string;
    /**
     * App subscription country active status
     */
    active?: boolean;
    /**
     * Reference to subscription this subscription country belongs to
     */
    appSubscription?: Reference;
    /**
     * The number of merchants that have this app subscription country installed
     */
    installCount?: number;
};

