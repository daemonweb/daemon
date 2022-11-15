/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AdditionalChargeAmount } from './AdditionalChargeAmount';
import type { AppTracking } from './AppTracking';
import type { CardTransaction } from './CardTransaction';
import type { CashAdvanceExtra } from './CashAdvanceExtra';
import type { DCCInfo } from './DCCInfo';
import type { DebitRefund } from './DebitRefund';
import type { GermanInfo } from './GermanInfo';
import type { IncrementalAuthorization } from './IncrementalAuthorization';
import type { LineItemPayment } from './LineItemPayment';
import type { OceanGatewayInfo } from './OceanGatewayInfo';
import type { PaymentEmiInfo } from './PaymentEmiInfo';
import type { PaymentTaxRate } from './PaymentTaxRate';
import type { PurchaseCardL2 } from './PurchaseCardL2';
import type { PurchaseCardL3 } from './PurchaseCardL3';
import type { Reference } from './Reference';
import type { Refund } from './Refund';
import type { ServiceChargeAmount } from './ServiceChargeAmount';
import type { SignatureDisclaimer } from './SignatureDisclaimer';
import type { Tender } from './Tender';
import type { TerminalManagementComponent } from './TerminalManagementComponent';
import type { TransactionInfo } from './TransactionInfo';
import type { TransactionSettings } from './TransactionSettings';
import type { VoidReasonDetails } from './VoidReasonDetails';

export type Payment = {
    /**
     * Unique identifier
     */
    id?: string;
    /**
     * The order with which the payment is associated
     */
    order?: Reference;
    /**
     * Device which processed the transaction for this payment, a 128-bit UUID, not a normal base-13 Clover ID.
     */
    device?: Reference;
    /**
     * The tender type associated with this payment, e.g. credit card, cash, etc.
     */
    tender?: Tender;
    /**
     * Total amount paid
     */
    amount?: number;
    /**
     * Amount paid in tips
     */
    tipAmount?: number;
    /**
     * Amount paid in tax
     */
    taxAmount?: number;
    /**
     * Amount given back in a cash back transaction
     */
    cashbackAmount?: number;
    /**
     * Amount of cash given by the customer
     */
    cashTendered?: number;
    externalPaymentId?: string;
    /**
     * The employee who processed the payment
     */
    employee?: Reference;
    /**
     * Time payment was recorded on server
     */
    createdTime?: number;
    clientCreatedTime?: number;
    /**
     * The time when the transaction was processed by the gateway
     */
    gatewayProcessingTime?: number;
    /**
     * Last modified time of the payment
     */
    modifiedTime?: number;
    offline?: boolean;
    result?: Payment.result;
    /**
     * Information about the card used for credit/debit card payments
     */
    cardTransaction?: CardTransaction;
    /**
     * Amount record as a service charge
     */
    serviceCharge?: ServiceChargeAmount;
    attributes?: {
        default?: string;
    };
    additionalCharges?: Array<AdditionalChargeAmount>;
    taxRates?: Array<PaymentTaxRate>;
    refunds?: Array<Refund>;
    note?: string;
    lineItemPayments?: Array<LineItemPayment>;
    /**
     * Authorization which this payment is associated to (opening or closing payment) if one exists
     */
    authorization?: Reference;
    /**
     * If voided, the corresponding successful payment, and vice versa
     */
    voidPaymentRef?: Reference;
    /**
     * If voided, the reason why (when available)
     */
    voidReason?: Payment.voidReason;
    /**
     * Detailed explanation on why the transaction is getting voided
     */
    voidReasonDetails?: VoidReasonDetails;
    /**
     * Dynamic Currency Conversion information
     */
    dccInfo?: DCCInfo;
    /**
     * Per transaction settings for the payment
     */
    transactionSettings?: TransactionSettings;
    /**
     * German region-specific information
     */
    germanInfo?: GermanInfo;
    /**
     * Tracking information for the app that created this payment.
     */
    appTracking?: AppTracking;
    /**
     * Information specific to cash advance transactions.
     */
    cashAdvanceExtra?: CashAdvanceExtra;
    /**
     * Transaction information
     */
    transactionInfo?: TransactionInfo;
    /**
     * Information displayed to customer for storing electronic signatures
     */
    signatureDisclaimer?: SignatureDisclaimer;
    /**
     * The external reference id if associated with the payment
     */
    externalReferenceId?: string;
    merchant?: Reference;
    increments?: Array<IncrementalAuthorization>;
    /**
     * Purchase card level 2 data
     */
    purchaseCardL2?: PurchaseCardL2;
    /**
     * Purchase card level 3 data
     */
    purchaseCardL3?: PurchaseCardL3;
    /**
     * Ocean Gateway info
     */
    oceanGatewayInfo?: OceanGatewayInfo;
    /**
     * Terminal management components as defined by Nexo. They contain general information on the terminal, the installed payment app, etc.
     */
    terminalManagementComponents?: Array<TerminalManagementComponent>;
    /**
     * Associated EMI information
     */
    emiInfo?: PaymentEmiInfo;
    /**
     * The refund parameters required for debit card refunds
     */
    debitRefund?: DebitRefund;
};

export namespace Payment {

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

    /**
     * If voided, the reason why (when available)
     */
    export enum voidReason {
        USER_CANCEL = 'USER_CANCEL',
        TRANSPORT_ERROR = 'TRANSPORT_ERROR',
        REJECT_SIGNATURE = 'REJECT_SIGNATURE',
        REJECT_PARTIAL_AUTH = 'REJECT_PARTIAL_AUTH',
        NOT_APPROVED = 'NOT_APPROVED',
        FAILED = 'FAILED',
        AUTH_CLOSED_NEW_CARD = 'AUTH_CLOSED_NEW_CARD',
        DEVELOPER_PAY_PARTIAL_AUTH = 'DEVELOPER_PAY_PARTIAL_AUTH',
        REJECT_DUPLICATE = 'REJECT_DUPLICATE',
        REJECT_OFFLINE = 'REJECT_OFFLINE',
        GIFTCARD_LOAD_FAILED = 'GIFTCARD_LOAD_FAILED',
        USER_GIFTCARD_LOAD_CANCEL = 'USER_GIFTCARD_LOAD_CANCEL',
        DEVELOPER_PAY_TIP_ADJUST_FAILED = 'DEVELOPER_PAY_TIP_ADJUST_FAILED',
        USER_CUSTOMER_CANCEL = 'USER_CUSTOMER_CANCEL',
        FRAUD = 'FRAUD',
        REJECT_GREATER_APPROVED_AMOUNT = 'REJECT_GREATER_APPROVED_AMOUNT',
        TIMEOUT = 'TIMEOUT',
    }


}

