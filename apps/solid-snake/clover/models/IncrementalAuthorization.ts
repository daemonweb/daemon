/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CardTransaction } from './CardTransaction';
import type { Reference } from './Reference';

export type IncrementalAuthorization = {
    /**
     * Unique identifier
     */
    id?: string;
    /**
     * Amount of the incremental authorization, includes additional charges in db
     */
    amount?: number;
    cardTransaction?: CardTransaction;
    /**
     * Result of the incremental auth
     */
    result?: IncrementalAuthorization.result;
    /**
     * Created time on the server
     */
    createdTime?: number;
    /**
     * The employee who processed the incremental Auth
     */
    employee?: Reference;
    /**
     * Amount of the incremental authorization
     */
    incrementAmount?: number;
};

export namespace IncrementalAuthorization {

    /**
     * Result of the incremental auth
     */
    export enum result {
        SUCCESS = 'SUCCESS',
        FAIL = 'FAIL',
        INITIATED = 'INITIATED',
        VOIDED = 'VOIDED',
        VOIDING = 'VOIDING',
        VOID_FAILED = 'VOID_FAILED',
        AUTH = 'AUTH',
        AUTH_COMPLETED = 'AUTH_COMPLETED',
        DISCOUNT = 'DISCOUNT',
        OFFLINE_RETRYING = 'OFFLINE_RETRYING',
        PENDING = 'PENDING',
    }


}

