/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CashEvent } from '../models/CashEvent';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CashService {

    /**
     * Get all cash events
     * Retrieve all cash events for this merchant. Cash events can also be consumed by registering a Webhook callback. See https://docs.clover.com/build/webhooks/
     * @param mId Merchant Id
     * @param filter Filter fields: [employee.id, note, amountChange, employee.name, type, device.id, timestamp]
     * @param expand Expandable fields: [employee, device]
     * @returns CashEvent
     * @throws ApiError
     */
    public static cashGetAllCashEvents(
        mId: string,
        filter?: string,
        expand?: string,
    ): CancelablePromise<CashEvent> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/cash_events',
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
     * Get all cash events for an employee
     * Retrieve cash events filtered by employee ID. Cash events can also be consumed by registering a Webhook callback. See https://docs.clover.com/build/webhooks/
     * @param mId Merchant Id
     * @param empId Employee Id
     * @param filter Filter fields: [employee.id, note, amountChange, employee.name, type, device.id, timestamp]
     * @param expand Expandable fields: [employee, device]
     * @returns CashEvent
     * @throws ApiError
     */
    public static cashGetEmployeeCashEvents(
        mId: string,
        empId: string,
        filter?: string,
        expand?: string,
    ): CancelablePromise<CashEvent> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/employees/{empId}/cash_events',
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
     * Get all cash events for a device
     * Retrieve cash events filtered by device ID. Cash events can also be consumed by registering a Webhook callback. See https://docs.clover.com/build/webhooks/
     * @param mId Merchant Id
     * @param deviceId Device Id
     * @param filter Filter fields: [employee.id, note, amountChange, employee.name, type, device.id, timestamp]
     * @param expand Expandable fields: [employee, device]
     * @returns CashEvent
     * @throws ApiError
     */
    public static cashGetDeviceCashEvents(
        mId: string,
        deviceId: string,
        filter?: string,
        expand?: string,
    ): CancelablePromise<CashEvent> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/devices/{deviceId}/cash_events',
            path: {
                'mId': mId,
                'deviceId': deviceId,
            },
            query: {
                'filter': filter,
                'expand': expand,
            },
        });
    }

}
