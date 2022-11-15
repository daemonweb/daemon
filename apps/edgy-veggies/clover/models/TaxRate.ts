/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Reference } from './Reference';

export type TaxRate = {
    id?: string;
    name: string;
    /**
     * to support Argentina's tax type
     */
    taxType?: TaxRate.taxType;
    /**
     * For percentage based discounts like sales tax
     */
    rate?: number;
    isDefault?: boolean;
    /**
     * Items associated with this tax rate
     */
    items?: Array<Reference>;
    /**
     * For a flat tax like recycling redemption fee, expressed as number of cents
     */
    taxAmount?: number;
    /**
     * Timestamp when tax rate was last deleted
     */
    deletedTime?: number;
    /**
     * Timestamp when tax rate was last modified
     */
    modifiedTime?: number;
};

export namespace TaxRate {

    /**
     * to support Argentina's tax type
     */
    export enum taxType {
        VAT_TAXABLE = 'VAT_TAXABLE',
        VAT_NON_TAXABLE = 'VAT_NON_TAXABLE',
        VAT_EXEMPT = 'VAT_EXEMPT',
        INTERNAL_TAX = 'INTERNAL_TAX',
        PARTNER_TAX = 'PARTNER_TAX',
    }


}

