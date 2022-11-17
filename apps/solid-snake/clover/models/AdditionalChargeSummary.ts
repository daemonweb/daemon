/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AdditionalChargeSummary = {
    /**
     * Amount
     */
    charge?: number;
    type?: AdditionalChargeSummary.type;
};

export namespace AdditionalChargeSummary {

    export enum type {
        DELIVERY_FEE = 'DELIVERY_FEE',
    }


}

