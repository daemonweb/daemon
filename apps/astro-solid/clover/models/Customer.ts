/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Address } from './Address';
import type { Card } from './Card';
import type { CustomerMetadata } from './CustomerMetadata';
import type { EmailAddress } from './EmailAddress';
import type { PhoneNumber } from './PhoneNumber';
import type { Reference } from './Reference';

export type Customer = {
    /**
     * Unique identifier
     */
    id?: string;
    /**
     * The merchant that is associated with this customer
     */
    merchant?: Reference;
    /**
     * First/given name of the customer
     */
    firstName?: string;
    /**
     * Last name/surname of the customer
     */
    lastName?: string;
    marketingAllowed?: boolean;
    customerSince?: number;
    orders?: Array<Reference>;
    addresses?: Array<Address>;
    emailAddresses?: Array<EmailAddress>;
    phoneNumbers?: Array<PhoneNumber>;
    cards?: Array<Card>;
    /**
     * Additional information about the customer.
     */
    metadata?: CustomerMetadata;
};

