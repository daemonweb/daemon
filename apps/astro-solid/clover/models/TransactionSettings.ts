/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CashbackSuggestion } from './CashbackSuggestion';
import type { TipSuggestion } from './TipSuggestion';

export type TransactionSettings = {
    cardEntryMethods?: number;
    disableCashBack?: boolean;
    cloverShouldHandleReceipts?: boolean;
    forcePinEntryOnSwipe?: boolean;
    disableRestartTransactionOnFailure?: boolean;
    allowOfflinePayment?: boolean;
    approveOfflinePaymentWithoutPrompt?: boolean;
    forceOfflinePayment?: boolean;
    signatureThreshold?: number;
    signatureEntryLocation?: TransactionSettings.signatureEntryLocation;
    tipMode?: TransactionSettings.tipMode;
    tippableAmount?: number;
    disableReceiptSelection?: boolean;
    disableDuplicateCheck?: boolean;
    /**
     * If set to true, confirmation requests triggered by a challenge at the payment gateway are automatically accepted, and confirmation requests are not transmitted back to the calling program. Be sure you are willing to accept the risk associated with accepting offline or duplicate payment challenges. See https://docs.clover.com/build/working-with-challenges for more information.
     */
    autoAcceptPaymentConfirmations?: boolean;
    autoAcceptSignature?: boolean;
    returnResultOnTransactionComplete?: boolean;
    tipSuggestions?: Array<TipSuggestion>;
    cashbackSuggestions?: Array<CashbackSuggestion>;
    regionalExtras?: {
        default?: string;
    };
    disableCreditSurcharge?: boolean;
    receiptOptions?: {
        default?: string;
    };
    remoteReceipts?: boolean;
};

export namespace TransactionSettings {

    export enum signatureEntryLocation {
        ON_SCREEN = 'ON_SCREEN',
        ON_PAPER = 'ON_PAPER',
        NONE = 'NONE',
    }

    export enum tipMode {
        TIP_PROVIDED = 'TIP_PROVIDED',
        ON_SCREEN_BEFORE_PAYMENT = 'ON_SCREEN_BEFORE_PAYMENT',
        ON_SCREEN_AFTER_PAYMENT = 'ON_SCREEN_AFTER_PAYMENT',
        ON_PAPER = 'ON_PAPER',
        NO_TIP = 'NO_TIP',
    }


}

