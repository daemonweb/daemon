/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AppBundle } from './AppBundle';
import type { MerchantPlanIncludedDevice } from './MerchantPlanIncludedDevice';
import type { Module } from './Module';

export type MerchantPlan = {
    /**
     * Unique identifier
     */
    id?: string;
    /**
     * The name of the merchant plan
     */
    name?: string;
    /**
     * Description of the plan
     */
    description?: string;
    price?: number;
    /**
     * Transient field, the free trial period, as defined in this plan's group.
     */
    trialDays?: number;
    /**
     * Date/time this plan's trial will expire for the merchant with this plan. This is a transient value only applicable to the merchant assigned to this plan.
     */
    trialExpirationTime?: number;
    modules?: Array<Module>;
    appBundle?: AppBundle;
    numDevicesIncludedWithPrice?: number;
    /**
     * Deprecated, use numDevicesIncludedWithPrice field instead
     */
    devicesIncludedWithPrice?: Array<MerchantPlanIncludedDevice>;
    /**
     * If true and multiple plans of this code then treat as default plan for reseller. Cannot use word default.
     */
    defaultPlan?: boolean;
    /**
     * True if plan metadata indicates this plan should be recommended in OOBE plan selection.
     */
    recommended?: boolean;
    /**
     * Pricing model for plan. This is calculated based on the plan's flags. This enum is typically used to show appropriate text for the plan's pricing.
     */
    pricingModel?: MerchantPlan.pricingModel;
    /**
     * User-friendly description of plan pricing for display
     */
    pricingDescription?: string;
};

export namespace MerchantPlan {

    /**
     * Pricing model for plan. This is calculated based on the plan's flags. This enum is typically used to show appropriate text for the plan's pricing.
     */
    export enum pricingModel {
        PER_MONTH = 'PER_MONTH',
        PER_DEVICE = 'PER_DEVICE',
        TIERED = 'TIERED',
        FREE = 'FREE',
        SUPPRESSED = 'SUPPRESSED',
    }


}

