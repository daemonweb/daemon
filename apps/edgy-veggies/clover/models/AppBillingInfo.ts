/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AppSubscription } from './AppSubscription';

export type AppBillingInfo = {
    /**
     * App UUID
     */
    id?: string;
    /**
     * Returns the current subscription tier of the merchant's app subscription.
     */
    appSubscription?: AppSubscription;
    /**
     * Returns true if a trial period is enabled for a paid app. You can choose the number of trial period days for your app.
     */
    isInTrial?: boolean;
    /**
     * Returns true if a merchant using an app is billable, and false if there is an app suppression on this particular app for the specific merchant.
     */
    billable?: boolean;
    /**
     * Returns false if all apps are non-billable for the specific merchant.
     */
    appBillable?: boolean;
    /**
     * Returns false if plan fees are non-billable for the specific merchant.
     */
    planBillable?: boolean;
    /**
     * Returns false if app charges are not exportable for the specific merchant.
     */
    appExportable?: boolean;
    /**
     * Returns false if plan charges are not exportable for the specific merchant.
     */
    planExportable?: boolean;
    /**
     * Returns the time when a merchant's app trial ends and billing commences.
     */
    billingStartTime?: number;
    /**
     * Returns ACTIVE for an active Clover merchant when the merchant's bank account is in good standing. Returns INACTIVE if the merchant was offboarded. Returns LAPSED if the merchant failed to pay Clover for app usage. Returns SUPPRESSED if this merchant will not be billed for reasons such as it's a demo merchant account, test merchant account, or that the merchant’s country is a pilot.
     */
    status?: AppBillingInfo.status;
    /**
     * Returns the number of days since the merchant's account was not in the ACTIVE status.
     */
    daysLapsed?: number;
};

export namespace AppBillingInfo {

    /**
     * Returns ACTIVE for an active Clover merchant when the merchant's bank account is in good standing. Returns INACTIVE if the merchant was offboarded. Returns LAPSED if the merchant failed to pay Clover for app usage. Returns SUPPRESSED if this merchant will not be billed for reasons such as it's a demo merchant account, test merchant account, or that the merchant’s country is a pilot.
     */
    export enum status {
        ACTIVE = 'ACTIVE',
        INACTIVE = 'INACTIVE',
        LAPSED = 'LAPSED',
        SUPPRESSED = 'SUPPRESSED',
    }


}

