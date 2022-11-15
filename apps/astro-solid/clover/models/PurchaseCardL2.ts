/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PurchaseCardL2 = {
    /**
     * Sales tax amount.
     */
    taxAmount?: number;
    /**
     * Taxable status
     */
    taxIndicator?: PurchaseCardL2.taxIndicator;
    /**
     * Tax amount for freight/shipping.
     */
    vatTaxAmount?: number;
    /**
     * Tax rate on freight/shipping amount.
     */
    vatTaxRate?: number;
    /**
     * Purchase identifier for customer/merchant.
     */
    purchaseIdentifier?: string;
    /**
     * Purchase card customer code.
     */
    pcOrderNumber?: string;
    /**
     * Applied discount amount.
     */
    discountAmount?: number;
    /**
     * Freight amount.
     */
    freightAmount?: number;
    /**
     * Duty amount.
     */
    dutyAmount?: number;
    /**
     * Destination postal code.
     */
    destinationPostalCode?: string;
    /**
     * Ship from postal code.
     */
    shipFromPostalCode?: string;
    /**
     * Destination country code.
     */
    destinationCountryCode?: string;
    /**
     * Merchant tax id.
     */
    merchantTaxId?: string;
    /**
     * Description of the product.
     */
    productDescription?: string;
};

export namespace PurchaseCardL2 {

    /**
     * Taxable status
     */
    export enum taxIndicator {
        UNKNOWN = 'UNKNOWN',
        TAXABLE = 'TAXABLE',
        NON_TAXABLE = 'NON_TAXABLE',
    }


}

