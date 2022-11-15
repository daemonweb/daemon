/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DCCInfo = {
    /**
     * Inquiry Rate ID (IPG)
     */
    inquiryRateId?: number;
    /**
     * Flag indicating whether DCC was applied on this txn
     */
    dccApplied?: boolean;
    /**
     * Foreign currency code
     */
    foreignCurrencyCode?: string;
    /**
     * Foreign (transaction) amount
     */
    foreignAmount?: number;
    /**
     * Exchange Rate
     */
    exchangeRate?: number;
    /**
     * Margin Rate Percentage
     */
    marginRatePercentage?: string;
    /**
     * Exchange Rate Source Name
     */
    exchangeRateSourceName?: string;
    /**
     * Exchange Rate Source Timestamp
     */
    exchangeRateSourceTimeStamp?: string;
    /**
     * Flag indicating whether DCC was offered on this txn
     */
    dccEligible?: boolean;
    /**
     * Exchange rate from the rate request
     */
    exchangeRateId?: string;
    /**
     * Rate request id from the rate request
     */
    rateRequestId?: string;
    /**
     * Amount sent for exchange in rate request
     */
    baseAmount?: number;
    /**
     * Alpha currency code for foreign currency
     */
    baseCurrencyCode?: string;
};

