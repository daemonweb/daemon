/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AppSubscriptionCountry } from './AppSubscriptionCountry';
import type { Reference } from './Reference';

export type AppSubscription = {
    /**
     * Unique identifier
     */
    id?: string;
    /**
     * DEPRECATED: App subscription name.  Per country pricing in subscriptionCountries.
     */
    name?: string;
    /**
     * DEPRECATED: The cost of the subscription.  Per country pricing in subscriptionCountries.
     */
    amount?: number;
    /**
     * DEPRECATED: App subscription name.  Per country pricing in subscriptionCountries.
     */
    description?: string;
    /**
     * DEPRECATED: App subscription active status.  Per country pricing in subscriptionCountries.
     */
    active?: boolean;
    /**
     * True if special zero cost app pricing for default app in custom service plans.
     */
    plan?: boolean;
    /**
     * Subscription country options for this app subscription
     */
    subscriptionCountries?: Array<AppSubscriptionCountry>;
    /**
     * Reference to app this subscription belongs to
     */
    app?: Reference;
    /**
     * App subscription label
     */
    label?: string;
};

