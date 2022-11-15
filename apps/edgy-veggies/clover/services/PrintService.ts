/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PrintOrder } from '../models/PrintOrder';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PrintService {

    /**
     * Submit a print request to the merchant's default order printer
     * @param mId Merchant Id
     * @param requestBody
     * @returns PrintOrder
     * @throws ApiError
     */
    public static orderCreatePrintEvent(
        mId: string,
        requestBody?: PrintOrder,
    ): CancelablePromise<PrintOrder> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/print_event',
            path: {
                'mId': mId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get a print event by its ID
     * Returns the `PrintOrder` associated with the specified `eventId`. A complete response, contains the printing device, print category, and job state, is returned If the print event state is `CREATED`, `PRINTING`, or `FAILED`. Once the job is successfully printed, it is discarded and cannot be replayed.
     * @param mId Merchant Id
     * @param eventId
     * @returns PrintOrder
     * @throws ApiError
     */
    public static orderGetPrintEvent(
        mId: string,
        eventId: string,
    ): CancelablePromise<PrintOrder> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/print_event/{eventId}',
            path: {
                'mId': mId,
                'eventId': eventId,
            },
        });
    }

}
