/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { VaultedCard } from './VaultedCard';

export type CardTransaction = {
    cardType?: CardTransaction.cardType;
    entryType?: CardTransaction.entryType;
    /**
     * The first six digits of the card number
     */
    first6?: string;
    /**
     * The last four digits of the card number
     */
    last4?: string;
    type?: CardTransaction.type;
    /**
     * Authorization code (if successful)
     */
    authCode?: string;
    referenceId?: string;
    transactionNo?: string;
    /**
     * A state inferred from transaction type and whether the gateway captured the transaction
     */
    state?: CardTransaction.state;
    /**
     * Extra info to be stored as part of gateway/card transaction
     */
    extra?: {
        default?: string;
    };
    begBalance?: number;
    endBalance?: number;
    avsResult?: CardTransaction.avsResult;
    cardholderName?: string;
    token?: string;
    /**
     * Vaulted card which can be used for subsequent transactions
     */
    vaultedCard?: VaultedCard;
    /**
     * The state as currently recorded. This differs from the legacy 'state' field. The legacy 'state' field is calculated from the 'type' field and whether the transaction was captured.
     */
    gatewayTxState?: CardTransaction.gatewayTxState;
    /**
     * Currency code
     */
    currency?: string;
    captured?: boolean;
};

export namespace CardTransaction {

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

    export enum entryType {
        SWIPED = 'SWIPED',
        KEYED = 'KEYED',
        VOICE = 'VOICE',
        VAULTED = 'VAULTED',
        OFFLINE_SWIPED = 'OFFLINE_SWIPED',
        OFFLINE_KEYED = 'OFFLINE_KEYED',
        EMV_CONTACT = 'EMV_CONTACT',
        EMV_CONTACTLESS = 'EMV_CONTACTLESS',
        MSD_CONTACTLESS = 'MSD_CONTACTLESS',
        PINPAD_MANUAL_ENTRY = 'PINPAD_MANUAL_ENTRY',
        QR_CODE = 'QR_CODE',
        SCANNED = 'SCANNED',
    }

    export enum type {
        AUTH = 'AUTH',
        PREAUTH = 'PREAUTH',
        PREAUTHCAPTURE = 'PREAUTHCAPTURE',
        ADJUST = 'ADJUST',
        VOID = 'VOID',
        VOIDRETURN = 'VOIDRETURN',
        RETURN = 'RETURN',
        REFUND = 'REFUND',
        NAKEDREFUND = 'NAKEDREFUND',
        GETBALANCE = 'GETBALANCE',
        BATCHCLOSE = 'BATCHCLOSE',
        ACTIVATE = 'ACTIVATE',
        BALANCE_LOCK = 'BALANCE_LOCK',
        LOAD = 'LOAD',
        CASHOUT = 'CASHOUT',
        CASHOUT_ACTIVE_STATUS = 'CASHOUT_ACTIVE_STATUS',
        REDEMPTION = 'REDEMPTION',
        REDEMPTION_UNLOCK = 'REDEMPTION_UNLOCK',
        RELOAD = 'RELOAD',
        CASH_ADVANCE = 'CASH_ADVANCE',
        VOID_CREDIT = 'VOID_CREDIT',
        REFUND_CREDIT = 'REFUND_CREDIT',
        INTERNET_ACTIVATE = 'INTERNET_ACTIVATE',
        TOKEN_REQUEST = 'TOKEN_REQUEST',
        VERIFICATION = 'VERIFICATION',
    }

    /**
     * A state inferred from transaction type and whether the gateway captured the transaction
     */
    export enum state {
        PENDING = 'PENDING',
        CLOSED = 'CLOSED',
    }

    export enum avsResult {
        SUCCESS = 'SUCCESS',
        ZIP_CODE_MATCH = 'ZIP_CODE_MATCH',
        ZIP_CODE_MATCH_ADDRESS_NOT_CHECKED = 'ZIP_CODE_MATCH_ADDRESS_NOT_CHECKED',
        ADDRESS_MATCH = 'ADDRESS_MATCH',
        ADDRESS_MATCH_ZIP_NOT_CHECKED = 'ADDRESS_MATCH_ZIP_NOT_CHECKED',
        NEITHER_MATCH = 'NEITHER_MATCH',
        SERVICE_FAILURE = 'SERVICE_FAILURE',
        SERVICE_UNAVAILABLE = 'SERVICE_UNAVAILABLE',
        NOT_CHECKED = 'NOT_CHECKED',
        ZIP_CODE_NOT_MATCHED_ADDRESS_NOT_CHECKED = 'ZIP_CODE_NOT_MATCHED_ADDRESS_NOT_CHECKED',
        ADDRESS_NOT_MATCHED_ZIP_CODE_NOT_CHECKED = 'ADDRESS_NOT_MATCHED_ZIP_CODE_NOT_CHECKED',
    }

    /**
     * The state as currently recorded. This differs from the legacy 'state' field. The legacy 'state' field is calculated from the 'type' field and whether the transaction was captured.
     */
    export enum gatewayTxState {
        INITIATED = 'INITIATED',
        INITIATED_ON_AUTH = 'INITIATED_ON_AUTH',
        ACKNOWLEDGED = 'ACKNOWLEDGED',
        CONNECT_FAILED = 'CONNECT_FAILED',
        TIMEOUT = 'TIMEOUT',
        FAILED = 'FAILED',
        REVERSE_INITIATED = 'REVERSE_INITIATED',
        REVERSE_INITIATED_ON_AUTH = 'REVERSE_INITIATED_ON_AUTH',
        REVERSED = 'REVERSED',
        REVERSAL_FAILED = 'REVERSAL_FAILED',
        EXTERNAL = 'EXTERNAL',
    }


}

