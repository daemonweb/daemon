/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Address } from '../models/Address';
import type { Card } from '../models/Card';
import type { Customer } from '../models/Customer';
import type { CustomerMetadata } from '../models/CustomerMetadata';
import type { EmailAddress } from '../models/EmailAddress';
import type { PhoneNumber } from '../models/PhoneNumber';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CustomersService {

    /**
     * Get a list of customers in CSV format
     * Gives information for every customer of a merchant by default.
     * @param mId Merchant Id
     * @param filter Filter fields: [customerSince, firstName, lastName, emailAddress, phoneNumber, marketingAllowed, fullName, id, deletedTime]
     * @param expand Expandable fields: [addresses, emailAddresses, phoneNumbers, cards, metadata]
     * @returns Customer
     * @throws ApiError
     */
    public static handlersGetCustomersCsv(
        mId: string,
        filter?: string,
        expand?: string,
    ): CancelablePromise<Customer> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/customers.csv',
            path: {
                'mId': mId,
            },
            query: {
                'filter': filter,
                'expand': expand,
            },
        });
    }

    /**
     * Get a list of customers
     * Gives information for every customer of a merchant by default.
     * @param mId Merchant Id
     * @param filter Filter fields: [customerSince, firstName, lastName, emailAddress, phoneNumber, marketingAllowed, fullName, id, deletedTime]
     * @param expand Expandable fields: [addresses, emailAddresses, phoneNumbers, cards, metadata]
     * @returns Customer
     * @throws ApiError
     */
    public static customersGetCustomers(
        mId: string,
        filter?: string,
        expand?: string,
    ): CancelablePromise<Customer> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/customers',
            path: {
                'mId': mId,
            },
            query: {
                'filter': filter,
                'expand': expand,
            },
        });
    }

    /**
     * Create a customer
     * Creates an customer for a merchant. The request body cannot be null.
     * @param mId Merchant Id
     * @param expand Expandable fields: [addresses, emailAddresses, phoneNumbers, cards, metadata]
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static customersCreateCustomer(
        mId: string,
        expand?: string,
        requestBody?: Customer,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/customers',
            path: {
                'mId': mId,
            },
            query: {
                'expand': expand,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get a single customer
     * Returns information for a single customer.
     * @param mId Merchant Id
     * @param customerId
     * @param filter Filter fields: [customerSince, firstName, lastName, emailAddress, phoneNumber, marketingAllowed, fullName, id, deletedTime]
     * @param expand Expandable fields: [addresses, emailAddresses, phoneNumbers, cards, metadata]
     * @returns Customer
     * @throws ApiError
     */
    public static customersGetCustomer(
        mId: string,
        customerId: string,
        filter?: string,
        expand?: string,
    ): CancelablePromise<Customer> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/customers/{customerId}',
            path: {
                'mId': mId,
                'customerId': customerId,
            },
            query: {
                'filter': filter,
                'expand': expand,
            },
        });
    }

    /**
     * Update a customer
     * Updates information for a single customer. Only specified fields are overwritten.
     * @param mId Merchant Id
     * @param customerId
     * @param expand Expandable fields: [addresses, emailAddresses, phoneNumbers, cards, metadata]
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static customersUpdateCustomer(
        mId: string,
        customerId: string,
        expand?: string,
        requestBody?: Customer,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/customers/{customerId}',
            path: {
                'mId': mId,
                'customerId': customerId,
            },
            query: {
                'expand': expand,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete a customer
     * Deletes a single customer from a merchant.
     * @param mId Merchant Id
     * @param customerId
     * @returns any
     * @throws ApiError
     */
    public static customersDeleteCustomer(
        mId: string,
        customerId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v3/merchants/{mId}/customers/{customerId}',
            path: {
                'mId': mId,
                'customerId': customerId,
            },
        });
    }

    /**
     * Create a phone number for a customer
     * Creates a phone number associated to a merchant's customer.
     * @param mId Merchant Id
     * @param customerId
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static customersCreateCustomerPhoneNumber(
        mId: string,
        customerId: string,
        requestBody?: PhoneNumber,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/customers/{customerId}/phone_numbers',
            path: {
                'mId': mId,
                'customerId': customerId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Update a phone number for a customer
     * Updates a merchant's customer's phone number.
     * @param mId Merchant Id
     * @param customerId
     * @param phoneId
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static customersUpdateCustomerPhoneNumber(
        mId: string,
        customerId: string,
        phoneId: string,
        requestBody?: PhoneNumber,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/customers/{customerId}/phone_numbers/{phoneId}',
            path: {
                'mId': mId,
                'customerId': customerId,
                'phoneId': phoneId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete a customer phone number
     * Deletes a merchant's customer's phone number.
     * @param mId Merchant Id
     * @param customerId
     * @param phoneId
     * @returns any
     * @throws ApiError
     */
    public static customersDeleteCustomerPhoneNumber(
        mId: string,
        customerId: string,
        phoneId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v3/merchants/{mId}/customers/{customerId}/phone_numbers/{phoneId}',
            path: {
                'mId': mId,
                'customerId': customerId,
                'phoneId': phoneId,
            },
        });
    }

    /**
     * Create an email address for a customer
     * Creates an email address associated to a merchant's customer.
     * @param mId Merchant Id
     * @param customerId
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static customersCreateCustomerEmailAddress(
        mId: string,
        customerId: string,
        requestBody?: EmailAddress,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/customers/{customerId}/email_addresses',
            path: {
                'mId': mId,
                'customerId': customerId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Update an email address for a customer
     * Updates a merchant's customer's email address.
     * @param mId Merchant Id
     * @param customerId
     * @param emailId
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static customersUpdateCustomerEmailAddress(
        mId: string,
        customerId: string,
        emailId: string,
        requestBody?: EmailAddress,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/customers/{customerId}/email_addresses/{emailId}',
            path: {
                'mId': mId,
                'customerId': customerId,
                'emailId': emailId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete a customer email address
     * Deletes a merchant's customer's email address.
     * @param mId Merchant Id
     * @param customerId
     * @param emailId
     * @returns any
     * @throws ApiError
     */
    public static customersDeleteCustomerEmailAddress(
        mId: string,
        customerId: string,
        emailId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v3/merchants/{mId}/customers/{customerId}/email_addresses/{emailId}',
            path: {
                'mId': mId,
                'customerId': customerId,
                'emailId': emailId,
            },
        });
    }

    /**
     * Create an address for a customer
     * Creates an address associated to a merchant's customer.
     * @param mId Merchant Id
     * @param customerId
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static customersCreateCustomerAddress(
        mId: string,
        customerId: string,
        requestBody?: Address,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/customers/{customerId}/addresses',
            path: {
                'mId': mId,
                'customerId': customerId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Update an address for a customer
     * Updates a merchant's customer's address.
     * @param mId Merchant Id
     * @param customerId
     * @param addressId
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static customersUpdateCustomerAddress(
        mId: string,
        customerId: string,
        addressId: string,
        requestBody?: Address,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/customers/{customerId}/addresses/{addressId}',
            path: {
                'mId': mId,
                'customerId': customerId,
                'addressId': addressId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete a customer address
     * Deletes a merchant's customer's address.
     * @param mId Merchant Id
     * @param customerId
     * @param addressId
     * @returns any
     * @throws ApiError
     */
    public static customersDeleteCustomerAddress(
        mId: string,
        customerId: string,
        addressId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v3/merchants/{mId}/customers/{customerId}/addresses/{addressId}',
            path: {
                'mId': mId,
                'customerId': customerId,
                'addressId': addressId,
            },
        });
    }

    /**
     * Create a credit/debit card entry for a customer
     * "first6" and "last4" fields are required.
     * @param mId Merchant Id
     * @param customerId
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static customersCreateCustomerCard(
        mId: string,
        customerId: string,
        requestBody?: Card,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/customers/{customerId}/cards',
            path: {
                'mId': mId,
                'customerId': customerId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Update a credit/debit card record for a customer
     * @param mId Merchant Id
     * @param customerId
     * @param cardId
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static customersUpdateCustomerCard(
        mId: string,
        customerId: string,
        cardId: string,
        requestBody?: Card,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/customers/{customerId}/cards/{cardId}',
            path: {
                'mId': mId,
                'customerId': customerId,
                'cardId': cardId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete a customer card
     * @param mId Merchant Id
     * @param customerId
     * @param cardId
     * @returns any
     * @throws ApiError
     */
    public static customersDeleteCustomerCard(
        mId: string,
        customerId: string,
        cardId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v3/merchants/{mId}/customers/{customerId}/cards/{cardId}',
            path: {
                'mId': mId,
                'customerId': customerId,
                'cardId': cardId,
            },
        });
    }

    /**
     * Create note, birthday, business name for a customer
     * Creates note, birthday, business name associated to a merchant's customer.
     * @param mId Merchant Id
     * @param customerId
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static customersCreateOrUpdateCustomerMetadata(
        mId: string,
        customerId: string,
        requestBody?: CustomerMetadata,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/customers/{customerId}/metadata',
            path: {
                'mId': mId,
                'customerId': customerId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
