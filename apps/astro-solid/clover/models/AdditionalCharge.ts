/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Reference } from './Reference';

export type AdditionalCharge = {
    /**
     * Unique identifier
     */
    id?: string;
    /**
     * A reference to the MerchantAdditionalCharge that was used to create this AdditionalCharge. Note that since this a reference the MerchantAdditionalCharge can be changed and deleted any time such that it no longer matches this AdditionalCharge.
     */
    merchantAdditionalChargeRef?: Reference;
    /**
     * The type of additional charge
     */
    type?: AdditionalCharge.type;
    /**
     * Amount
     */
    amount?: number;
    /**
     * Percent to charge times 10000, e.g. 12.5% will be 125000
     */
    percentageDecimal?: number;
    /**
     * CreatedTime
     */
    createdTime?: number;
    /**
     * ModifiedTime
     */
    modifiedTime?: number;
    /**
     * Deleted time
     */
    deletedTime?: number;
};

export namespace AdditionalCharge {

    /**
     * The type of additional charge
     */
    export enum type {
        DELIVERY_FEE = 'DELIVERY_FEE',
    }


}

