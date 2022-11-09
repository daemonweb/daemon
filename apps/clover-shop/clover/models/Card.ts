/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Reference } from './Reference';

export type Card = {
    id?: string;
    first6: string;
    last4: string;
    firstName?: string;
    lastName?: string;
    expirationDate?: string;
    additionalInfo?: {
        default?: string;
    };
    cardType?: string;
    token?: string;
    tokenType?: Card.tokenType;
    /**
     * The timestamp from when this card was last updated.
     */
    modifiedTime?: number;
    /**
     * Customer who this card belongs to.
     */
    customer?: Reference;
};

export namespace Card {

    export enum tokenType {
        MULTIPAY = 'MULTIPAY',
        FINANCIAL = 'FINANCIAL',
        CTOKEN = 'CTOKEN',
    }


}

