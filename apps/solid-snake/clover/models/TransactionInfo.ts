/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DisplayAndPrintMessage } from './DisplayAndPrintMessage';
import type { IdentityDocument } from './IdentityDocument';
import type { PromotionalMessage } from './PromotionalMessage';
import type { SepaElvTransactionInfo } from './SepaElvTransactionInfo';

export type TransactionInfo = {
    /**
     * 2 character language used for the transaction. Deprecated in factor of transactionLocale.
     */
    languageIndicator?: string;
    /**
     * Locale for the transaction (e.g. en-CA)
     */
    transactionLocale?: string;
    accountSelection?: TransactionInfo.accountSelection;
    /**
     * Consists of 4 digits prefix + 8 digits
     */
    fiscalInvoiceNumber?: string;
    /**
     * AR Installments: number of installments
     */
    installmentsQuantity?: number;
    /**
     * AR Installments: plan alphanum code
     */
    installmentsPlanCode?: string;
    /**
     * AR Installments: selected plan id
     */
    installmentsPlanId?: string;
    /**
     * AR Installments: selected plan desc
     */
    installmentsPlanDesc?: string;
    /**
     * Card type label
     */
    cardTypeLabel?: string;
    /**
     * Card Symbol for identify in payment_card_config table
     */
    cardSymbol?: string;
    /**
     * STAN(System Audit Trace Number)
     */
    stan?: number;
    /**
     * Customers identification number and type
     */
    identityDocument?: IdentityDocument;
    /**
     * Transaction Batch Number
     */
    batchNumber?: string;
    /**
     * Transaction Receipt Number
     */
    receiptNumber?: string;
    /**
     * Reversal STAN Ref Num
     */
    reversalStanRefNum?: string;
    /**
     * STAN for reversal
     */
    reversalStan?: number;
    /**
     * MAC for reversal
     */
    reversalMac?: string;
    /**
     * MAC KSN for reversal
     */
    reversalMacKsn?: string;
    /**
     * Designates the unique location of a terminal at a merchant
     */
    terminalIdentification?: string;
    /**
     * Main internal identifier of terminal which should be the same across all Fiserv’s components
     */
    externalTerminalId?: string;
    /**
     * When concatenated with the Acquirer Identifier, uniquely identifies a given merchant
     */
    merchantIdentifier?: string;
    /**
     * Indicates the name and location of the merchant
     */
    merchantNameLocation?: string;
    /**
     * Masked track2 data
     */
    maskedTrack2?: string;
    /**
     * Extra data for receipt
     */
    receiptExtraData?: string;
    /**
     * Defines the Financial Service selected for the transaction
     */
    selectedService?: TransactionInfo.selectedService;
    /**
     * Result of the transaction
     */
    transactionResult?: TransactionInfo.transactionResult;
    /**
     * Contains a hex string with needed TLV tags for certification
     */
    transactionTags?: string;
    /**
     * Contains the information how the data inside transactionTags should be coded - initially we cause default and nexo as formats
     */
    txFormat?: TransactionInfo.txFormat;
    /**
     * Contains the information how the PAN should masked.
     */
    panMask?: string;
    /**
     * Counter maintained by the terminal that is incremented for each transaction at the beginning of the Perform Service function.
     */
    transactionSequenceCounter?: string;
    /**
     * Identifies and differentiates cards with the same PAN.
     */
    applicationPanSequenceNumber?: string;
    /**
     * Contains the reason why the transaction should be reversed in the host. It has to be mapped in server with the expected value by the corresponding gateway
     */
    reversalReason?: TransactionInfo.reversalReason;
    /**
     * Boolean to determine if the transaction done using a vaulted card is a token based transaction
     */
    isTokenBasedTx?: boolean;
    /**
     * For reversal and capture transactions, this contains the reference (transactionSequenceCounter) to the originating transaction.
     */
    origTransactionSequenceCounter?: string;
    /**
     * This field is populated when the TSC of a terminal is out of sync and is provided with an update.
     */
    transactionSequenceCounterUpdate?: string;
    /**
     * Boolean value defining if the corresponding TX was performed in NEXO emergency mode according NEXO IS Spec chapter 10.2
     */
    emergencyFlag?: boolean;
    /**
     * This field contains the entry type of a transaction.
     */
    entryType?: TransactionInfo.entryType;
    promotionalMessage?: PromotionalMessage;
    sepaElvTransactionInfo?: SepaElvTransactionInfo;
    /**
     * Client card type should be used only limited purpose only and should not be confused with cardType in other objects.
     * This is a read only field and must not to be overwritten on server or client once set on client.
     * This is set on client only for MSR tx for now as the AIDs are not identified for MSR.
     * For few MSR tx, the card type was identified incorrectly on client side, and also on server side based on the bin match.
     * In order to get the correct card types, this client card type will be sent to the server
     */
    clientCardType?: TransactionInfo.clientCardType;
    /**
     * The app explicitly selected by the customer via the choice button.
     */
    explicitlySelectedApp?: string;
    /**
     * Defines if the corresponding TX was performed as SEPA ELV TX.
     */
    isSepaElv?: boolean;
    /**
     * Defines if the corresponding TX was performed as SEPA ELV TX.
     */
    cardEntryType?: TransactionInfo.cardEntryType;
    printMessages?: Array<DisplayAndPrintMessage>;
};

export namespace TransactionInfo {

    export enum accountSelection {
        CREDIT = 'CREDIT',
        DEBIT = 'DEBIT',
        CHECKING = 'CHECKING',
        SAVINGS = 'SAVINGS',
    }

    /**
     * Defines the Financial Service selected for the transaction
     */
    export enum selectedService {
        NONE = 'NONE',
        PAYMENT = 'PAYMENT',
        REFUND = 'REFUND',
        CANCELLATION = 'CANCELLATION',
        PRE_AUTH = 'PRE_AUTH',
        UPDATE_PRE_AUTH = 'UPDATE_PRE_AUTH',
        PAYMENT_COMPLETION = 'PAYMENT_COMPLETION',
        CASH_ADVANCE = 'CASH_ADVANCE',
        DEFERRED_PAYMENT = 'DEFERRED_PAYMENT',
        DEFERRED_PAYMENT_COMPLETION = 'DEFERRED_PAYMENT_COMPLETION',
        VOICE_AUTHORISATION = 'VOICE_AUTHORISATION',
        CARDHOLDER_DETECTION = 'CARDHOLDER_DETECTION',
        TOKEN_REQUEST = 'TOKEN_REQUEST',
        VERIFICATION = 'VERIFICATION',
    }

    /**
     * Result of the transaction
     */
    export enum transactionResult {
        APPROVED = 'APPROVED',
        DECLINED = 'DECLINED',
        ABORTED = 'ABORTED',
        VOICE_AUTHORISATION = 'VOICE_AUTHORISATION',
        PAYMENT_PART_ONLY = 'PAYMENT_PART_ONLY',
        PARTIALLY_APPROVED = 'PARTIALLY_APPROVED',
        NONE = 'NONE',
    }

    /**
     * Contains the information how the data inside transactionTags should be coded - initially we cause default and nexo as formats
     */
    export enum txFormat {
        DEFAULT = 'DEFAULT',
        NEXO = 'NEXO',
    }

    /**
     * Contains the reason why the transaction should be reversed in the host. It has to be mapped in server with the expected value by the corresponding gateway
     */
    export enum reversalReason {
        CHIP_DECLINE = 'CHIP_DECLINE',
        CARDHOLDER_CANCELLATION = 'CARDHOLDER_CANCELLATION',
        COMMUNICATION_ERROR = 'COMMUNICATION_ERROR',
        OTHER_REASON = 'OTHER_REASON',
    }

    /**
     * This field contains the entry type of a transaction.
     */
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

    /**
     * Client card type should be used only limited purpose only and should not be confused with cardType in other objects.
     * This is a read only field and must not to be overwritten on server or client once set on client.
     * This is set on client only for MSR tx for now as the AIDs are not identified for MSR.
     * For few MSR tx, the card type was identified incorrectly on client side, and also on server side based on the bin match.
     * In order to get the correct card types, this client card type will be sent to the server
     */
    export enum clientCardType {
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

    /**
     * Defines if the corresponding TX was performed as SEPA ELV TX.
     */
    export enum cardEntryType {
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


}

