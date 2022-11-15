/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AppNotification } from '../models/AppNotification';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class NotificationsService {

    /**
     * Create a notification for an app
     * Push a message to all merchant devices that have your app installed and are listening for notifications.  For details on how to use Clover's Android SDK to receive notifications see: https://github.com/clover/android-examples/tree/master/pushnotificationexample
     * @param appId App Id
     * @param mId Merchant Id
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static appsCreateMerchantAppNotification(
        appId: string,
        mId: string,
        requestBody?: AppNotification,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/apps/{appId}/merchants/{mId}/notifications',
            path: {
                'appId': appId,
                'mId': mId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Create a notification for a device
     * Push a message to a device that has your app installed and is listening for notifications.  For details on how to use Clover's Android SDK to receive notifications see: https://github.com/clover/android-examples/tree/master/pushnotificationexample
     * @param appId App Id
     * @param deviceId Device Id
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static appsCreateDeviceAppNotification(
        appId: string,
        deviceId: string,
        requestBody?: AppNotification,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/apps/{appId}/devices/{deviceId}/notifications',
            path: {
                'appId': appId,
                'deviceId': deviceId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
