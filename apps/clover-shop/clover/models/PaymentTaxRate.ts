/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PaymentTaxRate = {
    /**
     * Tax rate id.
     */
    id?: string;
    /**
     * Tax rate name. This field is optional.
     */
    name: string;
    /**
     * The tax rate. 100% = 1e7.
     */
    rate: number;
    /**
     * Whether the tax rate was configued as a default tax rate at the time that the payment was created.
     */
    isDefault?: boolean;
    /**
     * The sub-total of line items that the tax was based on. For VAT, this amount includes tax. For all others, this amount does not include tax.
     */
    taxableAmount: number;
    /**
     * Whether merchant is configured as VAT
     */
    isVat?: boolean;
    /**
     * The amount of tax collected. In cases where there are multiple payments for an order then it may be necessary to add an extra cent of tax to the last payment.
     */
    taxAmount?: number;
};

