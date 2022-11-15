/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EMIDetails } from './EMIDetails';

export type OceanGatewayInfo = {
    /**
     * This field contains transaction source returned from Ocean as part of Notification for a transaction
     */
    tranSource?: string;
    /**
     * This field contains LPM type info returned from Ocean as part of Notification for a transaction
     */
    tranChannel?: string;
    /**
     * This field contains transaction type info returned from Ocean as part of Notification for a transaction
     */
    transactionType?: string;
    /**
     * This field contains MerchantId returned from Ocean as part of Notification for a transaction
     */
    merchantId?: string;
    /**
     * This field contains TerminalId returned from Ocean as part of Notification for a transaction
     */
    terminalId?: string;
    /**
     * This field contains tender type info returned from Ocean as part of Notification for a transaction
     */
    tenderType?: string;
    /**
     * This field contains the entry method returned from Ocean as part of Notification for a transaction
     */
    entryMethod?: string;
    /**
     * This field contains the transaction amount returned from Ocean as part of Notification for a transaction
     */
    transactionAmount?: string;
    /**
     * This field contains the transaction currency returned from Ocean as part of Notification for a transaction
     */
    transactionCurrency?: string;
    /**
     * This field contains the ocean generated transaction Id for a transaction
     */
    fpTransactionId?: string;
    /**
     * This field contains the payment reference id provided by clover for a transaction
     */
    merchantTxnId?: string;
    /**
     * This field contains the refund transaction id returned from Ocean for a transaction
     */
    fpRefundTransactionId?: string;
    /**
     * This field contains the transaction status returned from Ocean as part of Notification for a transaction
     */
    transactionStatus?: string;
    /**
     * This field contains the transaction status description returned from Ocean as part of Notification for a transaction
     */
    transactionStatusDescription?: string;
    /**
     * This field contains rrn number (reference provided by bank) returned from Ocean as part of Notification for a transaction
     */
    rrn?: string;
    /**
     * This field contains batch number returned from Ocean as part of Notification for a transaction
     */
    batchNo?: string;
    /**
     * This field contains invoice number returned from Ocean as part of Notification for a transaction
     */
    invoiceNo?: string;
    /**
     * This field contains Customer LPM information returned from Ocean as part of Notification for a transaction
     */
    cardScheme?: string;
    /**
     * This field contains qr tpe either static or dynamic information returned from Ocean as part of Notification for a transaction
     */
    qrType?: string;
    /**
     * This field contains transaction completion date info returned from Ocean as part of Notification for a transaction
     */
    transactionDateTime?: string;
    /**
     * This field contains Authorization Code returned from Ocean as part of Notification for a transaction
     */
    authCode?: string;
    /**
     * This field contains pan information like masked virtual payment address,vehicle info,userId returned from Ocean as part of Notification for a transaction
     */
    pan?: string;
    /**
     * This field contains customer mobile info returned from Ocean as part of Notification for a transaction
     */
    customerMobile?: string;
    /**
     * This field contains customer name returned from Ocean as part of Notification for a transaction
     */
    customerName?: string;
    /**
     * This field contains customer remarks returned from Ocean as part of Notification for a transaction
     */
    customerRemarks?: string;
    /**
     * This field contains name of the bank returned from Ocean as part of Notification for a transaction
     */
    bankName?: string;
    /**
     * This field contains bank code returned from Ocean as part of Notification for a transaction
     */
    bankCode?: string;
    /**
     * This field indicates the EMI details of a customer returned from Ocean as part of Notification for a transaction
     */
    emiDetails?: EMIDetails;
};

