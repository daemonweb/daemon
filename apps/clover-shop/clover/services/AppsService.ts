/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AppBillingInfo } from '../models/AppBillingInfo';
import type { AppMeteredEvent } from '../models/AppMeteredEvent';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AppsService {

    /**
     * Get merchant app billing information
     * Returns the status of a merchant's app billing including current subscription tier and trial status. Requires an OAuth generated token.
     * @param appId App Id
     * @param mId Merchant Id
     * @returns AppBillingInfo
     * @throws ApiError
     */
    public static appsGetMerchantBillingInfo(
        appId: string,
        mId: string,
    ): CancelablePromise<AppBillingInfo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/apps/{appId}/merchants/{mId}/billing_info',
            path: {
                'appId': appId,
                'mId': mId,
            },
        });
    }

    /**
     * Get all events for an app metered event type
     * Retrieves all billing events for app metered event types such as 'reservation'. Requires an OAuth generated token.See the documentation: https://docs.clover.com/clover-platform/docs/configuring-billing#section-metered-pricing
     * @param appId App Id
     * @param mId Merchant Id
     * @param meteredId Metered Id
     * @returns AppMeteredEvent
     * @throws ApiError
     */
    public static appsGetMerchantAppMeteredEvents(
        appId: string,
        mId: string,
        meteredId: string,
    ): CancelablePromise<AppMeteredEvent> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/apps/{appId}/merchants/{mId}/metereds/{meteredId}',
            path: {
                'appId': appId,
                'mId': mId,
                'meteredId': meteredId,
            },
        });
    }

    /**
     * Create an app billing metered event
     * Create an app billing metered event. Clover charges the merchant for each action they take on the app based on the amount specified on the app's Pricing & Distribution page.Pass "count" as a query parameter to bill the merchant for the number of metered events. "count" is ignored if you pass it in the request body.Otherwise "count" defaults to 1. Requires an OAuth generated token.See the documentation: https://docs.clover.com/clover-platform/docs/configuring-billing#section-metered-pricing
     * @param appId App Id
     * @param mId Merchant Id
     * @param meteredId Metered Id
     * @returns AppMeteredEvent
     * @throws ApiError
     */
    public static appsCreateMerchantAppMeteredEvent(
        appId: string,
        mId: string,
        meteredId: string,
    ): CancelablePromise<AppMeteredEvent> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/apps/{appId}/merchants/{mId}/metereds/{meteredId}',
            path: {
                'appId': appId,
                'mId': mId,
                'meteredId': meteredId,
            },
        });
    }

    /**
     * Get an app billing metered event
     * Returns the event details on a merchant's app billing metered event. Requires an OAuth generated token.See the documentation: https://docs.clover.com/clover-platform/docs/configuring-billing#section-metered-pricing
     * @param appId App Id
     * @param mId Merchant Id
     * @param meteredId Metered Id
     * @param eventId
     * @returns AppMeteredEvent
     * @throws ApiError
     */
    public static appsGetMerchantAppMeteredEvent(
        appId: string,
        mId: string,
        meteredId: string,
        eventId: string,
    ): CancelablePromise<AppMeteredEvent> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/apps/{appId}/merchants/{mId}/metereds/{meteredId}/events/{eventId}',
            path: {
                'appId': appId,
                'mId': mId,
                'meteredId': meteredId,
                'eventId': eventId,
            },
        });
    }

    /**
     * Delete app billing metered event
     * Deletes an app metered event if the event was not already billed. Requires an OAuth generated token.
     * @param appId App Id
     * @param mId Merchant Id
     * @param meteredId Metered Id
     * @param eventId
     * @returns AppMeteredEvent
     * @throws ApiError
     */
    public static appsDeleteMerchantAppMeteredEvent(
        appId: string,
        mId: string,
        meteredId: string,
        eventId: string,
    ): CancelablePromise<AppMeteredEvent> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v3/apps/{appId}/merchants/{mId}/metereds/{meteredId}/events/{eventId}',
            path: {
                'appId': appId,
                'mId': mId,
                'meteredId': meteredId,
                'eventId': eventId,
            },
        });
    }

}
