/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AppTracking } from './AppTracking';
import type { CardTransaction } from './CardTransaction';
import type { CreditRefund } from './CreditRefund';
import type { Customer } from './Customer';
import type { DCCInfo } from './DCCInfo';
import type { GermanInfo } from './GermanInfo';
import type { Reference } from './Reference';
import type { TaxableAmountRate } from './TaxableAmountRate';
import type { Tender } from './Tender';
import type { TransactionInfo } from './TransactionInfo';
import type { TransactionSettings } from './TransactionSettings';

export type Credit = {
    /**
     * Unique identifier
     */
    id?: string;
    /**
     * The order with which the credit is associated
     */
    orderRef?: Reference;
    /**
     * Device which processed this credit, a 128-bit UUID, not a normal base-13 Clover ID.
     */
    device?: Reference;
    /**
     * The tender type associated with this payment, e.g. credit card, cash, etc.
     */
    tender?: Tender;
    /**
     * The employee who processed the payment
     */
    employee?: Reference;
    /**
     * Customer who received the credit/refund
     */
    customers?: Customer;
    /**
     * Amount paid
     */
    amount?: number;
    /**
     * Amount paid in tax
     */
    taxAmount?: number;
    taxRates?: Array<TaxableAmountRate>;
    /**
     * Time payment was recorded on server
     */
    createdTime?: number;
    clientCreatedTime?: number;
    /**
     * Information about the card used for credit/debit card payments
     */
    cardTransaction?: CardTransaction;
    voided?: boolean;
    voidReason?: string;
    /**
     * Dynamic Currency Conversion information
     */
    dccInfo?: DCCInfo;
    /**
     * Per transaction settings for the payment
     */
    transactionSettings?: TransactionSettings;
    creditRefunds?: Array<CreditRefund>;
    /**
     * German region-specific information
     */
    germanInfo?: GermanInfo;
    /**
     * Tracking information for the app that created this credit.
     */
    appTracking?: AppTracking;
    result?: Credit.result;
    /**
     * Reason why the credit was initiated
     */
    reason?: string;
    /**
     * Transaction information
     */
    transactionInfo?: TransactionInfo;
    merchant?: Reference;
    /**
     * The external reference id if associated with the credit
     */
    externalReferenceId?: string;
    CreditAttributes?: {
        default?: string;
    };
};

export namespace Credit {

    export enum result {
        SUCCESS = 'SUCCESS',
        FAIL = 'FAIL',
        INITIATED = 'INITIATED',
        VOIDED = 'VOIDED',
        VOIDING = 'VOIDING',
        VOID_FAILED = 'VOID_FAILED',
        AUTH = 'AUTH',
        AUTH_COMPLETED = 'AUTH_COMPLETED',
        DISCOUNT = 'DISCOUNT',
        OFFLINE_RETRYING = 'OFFLINE_RETRYING',
        PENDING = 'PENDING',
    }


}

