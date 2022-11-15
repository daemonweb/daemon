/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Address } from './Address';
import type { Employee } from './Employee';

export type Merchant = {
    /**
     * Unique identifier
     */
    id?: string;
    /**
     * Name of the merchant
     */
    name: string;
    /**
     * The account that owns this merchant
     */
    owner: Employee;
    /**
     * The address of the merchant.
     */
    address?: Address;
};

