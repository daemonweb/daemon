/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DisplayAndPrintMessage = {
    /**
     * Destination for the message CDSP - CustomerDisplay, CRCP - CustomerReceipt/AidParam, MDSP - MerchantDisplay, MRCP - MerchantReceipt/AidParam
     */
    destination?: DisplayAndPrintMessage.destination;
    /**
     * Contains the display and/or print message text from gateway
     */
    content?: string;
};

export namespace DisplayAndPrintMessage {

    /**
     * Destination for the message CDSP - CustomerDisplay, CRCP - CustomerReceipt/AidParam, MDSP - MerchantDisplay, MRCP - MerchantReceipt/AidParam
     */
    export enum destination {
        CUSTOMER_DISPLAY = 'CUSTOMER_DISPLAY',
        CUSTOMER_RECEIPT = 'CUSTOMER_RECEIPT',
        CUSTOMER_RECEIPT_AID_PARAM = 'CUSTOMER_RECEIPT_AID_PARAM',
        MERCHANT_DISPLAY = 'MERCHANT_DISPLAY',
        MERCHANT_RECEIPT = 'MERCHANT_RECEIPT',
        MERCHANT_RECEIPT_AID_PARAM = 'MERCHANT_RECEIPT_AID_PARAM',
    }


}

