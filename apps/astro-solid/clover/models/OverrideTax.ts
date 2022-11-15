/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TaxRate } from './TaxRate';

export type OverrideTax = {
    /**
     * Tax rates that apply to this line item
     */
    taxRates?: Array<TaxRate>;
};

