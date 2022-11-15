/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AdditionalChargeAmount = {
    /**
     * Additional charge id
     */
    id?: string;
    /**
     * Amount of the additional charge
     */
    amount?: number;
    /**
     * Percent rate of the additional charge times 10000
     */
    rate?: number;
    /**
     * The type of additional charge
     */
    type?: AdditionalChargeAmount.type;
};

export namespace AdditionalChargeAmount {

    /**
     * The type of additional charge
     */
    export enum type {
        INTERAC = 'INTERAC',
        CREDIT_SURCHARGE = 'CREDIT_SURCHARGE',
        CONVENIENCE_FEE = 'CONVENIENCE_FEE',
        INTERAC_V2 = 'INTERAC_V2',
        DELIVERY_FEE = 'DELIVERY_FEE',
    }


}

