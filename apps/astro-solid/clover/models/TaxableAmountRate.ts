/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Reference } from './Reference';

export type TaxableAmountRate = {
    /**
     * Tax rate id.
     */
    id?: string;
    /**
     * Tax rate name. This field is optional.
     */
    name?: string;
    /**
     * The sub-total of line items that the tax was based on. For VAT, this amount includes tax. For all others, this amount does not include tax.
     */
    taxableAmount?: number;
    /**
     * The tax rate. 100% = 1e7.
     */
    rate?: number;
    /**
     * Whether the taxable amount includes tax.
     */
    isVat?: boolean;
    /**
     * The amount of tax collected. In cases where there are multiple payments for an order then it may be necessary to add an extra cent of tax to the last payment.
     */
    taxAmount?: number;
    /**
     * The refund with which the tax rate is associated
     */
    transactionRef?: Reference;
};

