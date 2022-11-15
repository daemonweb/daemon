/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AdditionalChargeAmount } from './AdditionalChargeAmount';
import type { Payment } from './Payment';

export type Authorization = {
    /**
     * Unique identifier
     */
    id?: string;
    /**
     * Payment that the auth was opened with
     */
    payment?: Payment;
    /**
     * Name of tab
     */
    tabName?: string;
    /**
     * Amount authorized
     */
    amount?: number;
    /**
     * Type of credit card used for authorization
     */
    cardType?: Authorization.cardType;
    /**
     * Last 4 digits of credit card used for authorization
     */
    last4?: string;
    /**
     * Authorization code
     */
    authcode?: string;
    /**
     * Token used for the authorization
     */
    token?: string;
    type?: Authorization.type;
    note?: string;
    /**
     * The external reference id if associated with the payment
     */
    externalReferenceId?: string;
    /**
     * Payment that the auth was closed with
     */
    closingPayment?: Payment;
    /**
     * Time authorization was recorded on server
     */
    createdTime?: number;
    /**
     * Additional charges associated with the authorization. For incremental auth, it is the additional charge on total auth amount.
     */
    additionalCharges?: Array<AdditionalChargeAmount>;
    /**
     * Counter maintained by the terminal that is incremented for each transaction.
     */
    transactionSequenceCounter?: string;
    /**
     * Acquirer Terminal ID of the terminal. For incremental auth to refer to the terminal which does the increment.
     */
    acquirerTerminalId?: string;
};

export namespace Authorization {

    /**
     * Type of credit card used for authorization
     */
    export enum cardType {
        VISA = 'VISA',
        MC = 'MC',
        AMEX = 'AMEX',
        DISCOVER = 'DISCOVER',
        DINERS_CLUB = 'DINERS_CLUB',
        JCB = 'JCB',
        MAESTRO = 'MAESTRO',
        SOLO = 'SOLO',
        LASER = 'LASER',
        CHINA_UNION_PAY = 'CHINA_UNION_PAY',
        CARTE_BLANCHE = 'CARTE_BLANCHE',
        UNKNOWN = 'UNKNOWN',
        GIFT_CARD = 'GIFT_CARD',
        EBT = 'EBT',
        GIROCARD = 'GIROCARD',
        INTERAC = 'INTERAC',
        OTHER = 'OTHER',
        RUPAY = 'RUPAY',
    }

    export enum type {
        TAB = 'TAB',
        AUTH = 'AUTH',
    }


}

