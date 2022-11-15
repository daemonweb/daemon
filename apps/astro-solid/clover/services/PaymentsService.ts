/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Authorization } from '../models/Authorization';
import type { Credit } from '../models/Credit';
import type { CreditRefund } from '../models/CreditRefund';
import type { Payment } from '../models/Payment';
import type { Refund } from '../models/Refund';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PaymentsService {

    /**
     * Get all payments for an order
     * @param mId Merchant Id
     * @param orderId Order Id
     * @param filter Filter fields: [voidPaymentRef.voidReasonDetails, modifiedTime, voidReason, voidPaymentRef.id, cardTransaction.last4, cashTendered, device.id, voidPaymentRef.createdTime, externalReferenceId, result, offline, cardTransaction.transactionNo, voidPaymentRef.employeeId, paymentRefundId, merchantId, createdTime, externalPaymentId, voided, id, tender.id, deletedTime, employee.id, order.modifiedTime, amount, tipAmount, cardType, order.id, paymentAttributes.value, paymentAttributes.uuid, clientCreatedTime, voidReasonDetails, cardTransaction.captured, cardTransaction.currency, taxAmount, orderType.databaseId, developerApp.package]
     * @param expand Expandable fields: [tender, germanInfo, lineItemPayments, cardTransaction, dccInfo, employee, refunds, transactionInfo, externalReferenceId, oceanGatewayInfo, taxRates, additionalCharges, appTracking, paymentAttributes, order]
     * @returns Payment
     * @throws ApiError
     */
    public static payGetOrderPayments(
        mId: string,
        orderId: string,
        filter?: string,
        expand?: string,
    ): CancelablePromise<Payment> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/orders/{orderId}/payments',
            path: {
                'mId': mId,
                'orderId': orderId,
            },
            query: {
                'filter': filter,
                'expand': expand,
            },
        });
    }

    /**
     * Get all authorizations.
     * An authorization is a promise by a card issuer that a merchant can charge the customer up to the specified amount in the future. These are typically created when a merchant uses the "Bar Tabs" app and "Authorizations" app.
     * @param mId Merchant Id
     * @param filter Filter fields: [last4, note, amount, tabName, orderId, cardType, orderModifiedTime, type, device.id, token, result, authcode, externalReferenceId, closingPaymentId, merchantId, paymentId, createdTime, id, deletedTime]
     * @param expand Expandable fields: [payment]
     * @returns Authorization
     * @throws ApiError
     */
    public static payGetAuthorizations(
        mId: string,
        filter?: string,
        expand?: string,
    ): CancelablePromise<Authorization> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/authorizations',
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
     * Create an authorization on a Payment
     * Authorization must reference a payment, have an amount greater than 0, and have a type.
     * @param mId Merchant Id
     * @param requestBody
     * @returns Authorization
     * @throws ApiError
     */
    public static payCreateAuthorization(
        mId: string,
        requestBody?: Authorization,
    ): CancelablePromise<Authorization> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/authorizations',
            path: {
                'mId': mId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get a single authorization
     * @param mId Merchant Id
     * @param authId
     * @param expand Expandable fields: [tender, germanInfo, lineItemPayments, cardTransaction, dccInfo, employee, refunds, transactionInfo, externalReferenceId, oceanGatewayInfo, taxRates, additionalCharges, appTracking, paymentAttributes, order]
     * @returns Authorization
     * @throws ApiError
     */
    public static payGetAuthorization(
        mId: string,
        authId: string,
        expand?: string,
    ): CancelablePromise<Authorization> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/authorizations/{authId}',
            path: {
                'mId': mId,
                'authId': authId,
            },
            query: {
                'expand': expand,
            },
        });
    }

    /**
     * Update an authorization
     * @param mId Merchant Id
     * @param authId
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static payUpdateAuthorization(
        mId: string,
        authId: string,
        requestBody?: Authorization,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/authorizations/{authId}',
            path: {
                'mId': mId,
                'authId': authId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete an authorization
     * @param mId Merchant Id
     * @param authId
     * @returns any
     * @throws ApiError
     */
    public static payDeleteAuthorization(
        mId: string,
        authId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v3/merchants/{mId}/authorizations/{authId}',
            path: {
                'mId': mId,
                'authId': authId,
            },
        });
    }

    /**
     * Get all payments
     * Retrieve payment information including total amount, tipAmount, taxAmount, and result status.
     * @param mId Merchant Id
     * @param filter Filter fields: [voidPaymentRef.voidReasonDetails, modifiedTime, voidReason, voidPaymentRef.id, cardTransaction.last4, cashTendered, device.id, voidPaymentRef.createdTime, externalReferenceId, result, offline, cardTransaction.transactionNo, voidPaymentRef.employeeId, paymentRefundId, merchantId, createdTime, externalPaymentId, voided, id, tender.id, deletedTime, employee.id, order.modifiedTime, amount, tipAmount, cardType, order.id, paymentAttributes.value, paymentAttributes.uuid, clientCreatedTime, voidReasonDetails, cardTransaction.captured, cardTransaction.currency, taxAmount, orderType.databaseId, developerApp.package]
     * @param expand Expandable fields: [tender, germanInfo, lineItemPayments, cardTransaction, dccInfo, refunds, transactionInfo, externalReferenceId, oceanGatewayInfo, taxRates, additionalCharges, appTracking, paymentAttributes, order]
     * @returns Payment
     * @throws ApiError
     */
    public static payGetPayments(
        mId: string,
        filter?: string,
        expand?: string,
    ): CancelablePromise<Payment> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/payments',
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
     * Get a single payment
     * @param mId Merchant Id
     * @param payId Payment Id
     * @param expand Expandable fields: [tender, germanInfo, lineItemPayments, cardTransaction, dccInfo, employee, refunds, transactionInfo, externalReferenceId, oceanGatewayInfo, taxRates, additionalCharges, appTracking, paymentAttributes, order]
     * @returns Payment
     * @throws ApiError
     */
    public static payGetPayment(
        mId: string,
        payId: string,
        expand?: string,
    ): CancelablePromise<Payment> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/payments/{payId}',
            path: {
                'mId': mId,
                'payId': payId,
            },
            query: {
                'expand': expand,
            },
        });
    }

    /**
     * Update a payment
     * This endpoint can only be used to update the following information:
     * 1. `lineItemPayments`
     * 2. `employee.id` (if the payment is a preauth with `captured` currently set to `null)`.
     *
     * All other properties in the request are ignored.
     * @param mId Merchant Id
     * @param payId Payment Id
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static payUpdatePayment(
        mId: string,
        payId: string,
        requestBody?: Payment,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/payments/{payId}',
            path: {
                'mId': mId,
                'payId': payId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get all payments under an employee
     * @param mId Merchant Id
     * @param empId Employee Id
     * @param filter Filter fields: [voidPaymentRef.voidReasonDetails, modifiedTime, voidReason, voidPaymentRef.id, cardTransaction.last4, cashTendered, device.id, voidPaymentRef.createdTime, externalReferenceId, result, offline, cardTransaction.transactionNo, voidPaymentRef.employeeId, paymentRefundId, merchantId, createdTime, externalPaymentId, voided, id, tender.id, deletedTime, employee.id, order.modifiedTime, amount, tipAmount, cardType, order.id, paymentAttributes.value, paymentAttributes.uuid, clientCreatedTime, voidReasonDetails, cardTransaction.captured, cardTransaction.currency, taxAmount, orderType.databaseId, developerApp.package]
     * @param expand Expandable fields: [tender, germanInfo, lineItemPayments, cardTransaction, dccInfo, employee, refunds, transactionInfo, externalReferenceId, oceanGatewayInfo, taxRates, additionalCharges, appTracking, paymentAttributes, order]
     * @returns Payment
     * @throws ApiError
     */
    public static payGetEmployeePayments(
        mId: string,
        empId: string,
        filter?: string,
        expand?: string,
    ): CancelablePromise<Payment> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/employees/{empId}/payments',
            path: {
                'mId': mId,
                'empId': empId,
            },
            query: {
                'filter': filter,
                'expand': expand,
            },
        });
    }

    /**
     * Get all refunds for a merchant
     * @param mId Merchant Id
     * @param expand Expandable fields: [payment, germanInfo, appTracking, employee, overrideMerchantTender, serviceCharge, lineItems, transactionInfo, oceanGatewayInfo]
     * @returns Refund
     * @throws ApiError
     */
    public static payGetRefunds(
        mId: string,
        expand?: string,
    ): CancelablePromise<Refund> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/refunds',
            path: {
                'mId': mId,
            },
            query: {
                'expand': expand,
            },
        });
    }

    /**
     * Get a single refund
     * @param mId Merchant Id
     * @param refundId
     * @param expand Expandable fields: [payment, germanInfo, appTracking, employee, overrideMerchantTender, serviceCharge, lineItems, transactionInfo, oceanGatewayInfo]
     * @returns Refund
     * @throws ApiError
     */
    public static payGetRefund(
        mId: string,
        refundId: string,
        expand?: string,
    ): CancelablePromise<Refund> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/refunds/{refundId}',
            path: {
                'mId': mId,
                'refundId': refundId,
            },
            query: {
                'expand': expand,
            },
        });
    }

    /**
     * Get a list of credits
     * @param mId Merchant Id
     * @param filter Filter fields: [employee.id, order.modifiedTime, reason, amount, cardType, order.id, failed, device.id, merchantTender.databaseId, externalReferenceId, result, clientCreatedTime, merchantId, id, tender.id, taxAmount, orderType.databaseId, deletedTime]
     * @param expand Expandable fields: [dccInfo, germanInfo, appTracking, tender, employee, cardTransaction, order, taxRates, transactionInfo]
     * @returns Credit
     * @throws ApiError
     */
    public static payGetCredits(
        mId: string,
        filter?: string,
        expand?: string,
    ): CancelablePromise<Credit> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/credits',
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
     * Get a single credit
     * @param mId Merchant Id
     * @param creditId
     * @param expand Expandable fields: [dccInfo, germanInfo, appTracking, tender, employee, cardTransaction, order, taxRates, transactionInfo]
     * @returns Credit
     * @throws ApiError
     */
    public static payGetCredit(
        mId: string,
        creditId: string,
        expand?: string,
    ): CancelablePromise<Credit> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/credits/{creditId}',
            path: {
                'mId': mId,
                'creditId': creditId,
            },
            query: {
                'expand': expand,
            },
        });
    }

    /**
     * Get a list of credit refunds
     * @param mId Merchant Id
     * @param expand Expandable fields: [credit, germanInfo, appTracking, transactionInfo]
     * @returns Credit
     * @throws ApiError
     */
    public static payGetCreditRefunds(
        mId: string,
        expand?: string,
    ): CancelablePromise<Credit> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/credit_refunds',
            path: {
                'mId': mId,
            },
            query: {
                'expand': expand,
            },
        });
    }

    /**
     * Get a credit refund
     * @param mId Merchant Id
     * @param crId
     * @param expand Expandable fields: [credit, germanInfo, appTracking, transactionInfo]
     * @returns CreditRefund
     * @throws ApiError
     */
    public static payGetCreditRefund(
        mId: string,
        crId: string,
        expand?: string,
    ): CancelablePromise<CreditRefund> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/credit_refunds/{crId}',
            path: {
                'mId': mId,
                'crId': crId,
            },
            query: {
                'expand': expand,
            },
        });
    }

    /**
     * @param mId Merchant Id
     * @param payId Payment Id
     * @param expand Expandable fields: [tender, germanInfo, lineItemPayments, cardTransaction, dccInfo, employee, refunds, transactionInfo, externalReferenceId, oceanGatewayInfo, taxRates, additionalCharges, appTracking, paymentAttributes, order]
     * @returns any
     * @throws ApiError
     */
    public static payGetStatus(
        mId: string,
        payId: string,
        expand?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/payments/{payId}/status',
            path: {
                'mId': mId,
                'payId': payId,
            },
            query: {
                'expand': expand,
            },
        });
    }

}
