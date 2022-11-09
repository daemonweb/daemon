/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Reference } from './Reference';

export type MerchantProperties = {
    merchantRef?: Reference;
    defaultCurrency?: string;
    tipsEnabled?: boolean;
    receiptProperties?: string;
    summaryHour?: number;
    signatureThreshold?: number;
    hasDefaultEmployee?: boolean;
    tipRateDefault?: number;
    onPaperTipSignatures?: boolean;
    autoLogout?: boolean;
    orderTitle?: MerchantProperties.orderTitle;
    orderTitleMax?: number;
    resetOnReportingTime?: boolean;
    notesOnOrders?: boolean;
    deleteOrders?: boolean;
    removeTaxEnabled?: boolean;
    groupLineItems?: boolean;
    alternateInventoryNames?: boolean;
    autoPrint?: boolean;
    infoleaseSuppressBilling?: boolean;
    infoleaseSuppressPlanBilling?: boolean;
    shippingAddress?: string;
    marketingEnabled?: boolean;
    supportPhone?: string;
    supportEmail?: string;
    manualCloseout?: boolean;
    manualCloseoutPerDevice?: boolean;
    autoCloseoutTimezone?: string;
    showCloseoutOrders?: boolean;
    sendCloseoutEmail?: boolean;
    stayInCategory?: boolean;
    /**
     * The locale of the merchant.
     */
    locale?: string;
    timezone?: string;
    /**
     * Whether this merchant is in a VAT country
     */
    vat?: boolean;
    /**
     * The VAT tax name that is shown on receipts
     */
    vatTaxName?: string;
    /**
     * Temporary while we are switching US billing systems
     */
    appBillingSystem?: string;
    /**
     * The ABA Account Number.  Supplied by First Data.
     */
    abaAccountNumber?: string;
    /**
     * The Masked DDA Account Number.  Supplied by First Data.
     */
    ddaAccountNumber?: string;
    trackStock?: boolean;
    updateStock?: boolean;
    allowClockOutWithOpenOrders?: boolean;
    logInClockInPrompt?: boolean;
    pinLength?: number;
    /**
     * Whether cash back is enabled for this merchant
     */
    cashBackEnabled?: boolean;
    /**
     * List of cash back possible cash back amounts
     */
    cashBackOptions?: string;
    /**
     * The maximum amount of cash back that the customer can select.
     */
    maxCashBack?: number;
    /**
     * Merchant hierarchy (Business, Bank, Agent, Corp, Chain). Supplied by First Data.
     */
    hierarchy?: string;
    /**
     * Whether or not merchant has consented to infolease billing
     */
    hasConsented?: boolean;
    /**
     * This is used to identify if the merchant is self-boarded
     */
    merchantBoardingStatus?: string;
    /**
     * Whether we display the First Data receipt logo
     */
    printedFirstDataReceiptLogoEnabled?: boolean;
    /**
     * Merchant-specified privacy policy url
     */
    merchantPrivacyPolicyUrl?: string;
    /**
     * Whether we display the taxes table on receipts
     */
    disablePrintTaxesPaymentOnReceipts?: boolean;
    /**
     * Per the new V2 TAMPER_EXPERIENCE (see feature flag) if this is true then setting the SRED_DISABLED merchant setting to true will result in the terminal parameter DENY_COMPROMISED_TX becoming false which enables a not provisioned (tampered) device with TransArmor SRED keys to take card payments without PIN. If this is false then setting SRED_DISABLED merchant to true setting will have no effect.
     */
    limpModeAllowed2?: boolean;
    orderChangeReasonSetting?: boolean;
};

export namespace MerchantProperties {

    export enum orderTitle {
        NONE = 'NONE',
        MANUAL = 'MANUAL',
        AUTOMATIC = 'AUTOMATIC',
    }


}

