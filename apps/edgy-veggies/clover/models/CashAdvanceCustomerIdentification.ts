/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CashAdvanceCustomerIdentification = {
    idType?: CashAdvanceCustomerIdentification.idType;
    /**
     * Identification serial number
     */
    serialNumber?: string;
    /**
     * Masked identification serial number
     */
    maskedSerialNumber?: string;
    /**
     * Encrypted identification serial number
     */
    encryptedSerialNumber?: string;
    /**
     * Expiration date in format MMDDYYYY
     */
    expirationDate?: string;
    /**
     * State in which identification was issued
     */
    issuingState?: string;
    /**
     * Country in which identification was issued
     */
    issuingCountry?: string;
    /**
     * Full customer name
     */
    customerName?: string;
    addressStreet1?: string;
    addressStreet2?: string;
    addressCity?: string;
    addressState?: string;
    addressZipCode?: string;
    addressCountry?: string;
    /**
     * Employee id
     */
    tellerID?: number;
};

export namespace CashAdvanceCustomerIdentification {

    export enum idType {
        DRIVERS_LICENSE = 'DRIVERS_LICENSE',
        PASSPORT = 'PASSPORT',
        US_MILITARY_ID = 'US_MILITARY_ID',
        US_RESIDENT = 'US_RESIDENT',
        CONSULAR_ID = 'CONSULAR_ID',
        CANADIAN_CITIZEN = 'CANADIAN_CITIZEN',
        US_STATE_GOVT_ID = 'US_STATE_GOVT_ID',
        OTHER_ID = 'OTHER_ID',
    }


}

