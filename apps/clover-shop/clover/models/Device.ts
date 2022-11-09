/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Reference } from './Reference';

export type Device = {
    /**
     * Unique identifier
     */
    id?: string;
    /**
     * Name of the device (if entered)
     */
    name?: string;
    model?: string;
    merchant?: Reference;
    /**
     * A prefix that will be applied to order numbers. This is useful if the merchant and/or customer needs to track which device an order came from.
     */
    orderPrefix?: string;
    /**
     * The merchant device's terminal Id. FD-IPG sets the merchant_device terminal Id for LATAM devices
     */
    terminalId?: string;
    terminalPrefix?: number;
    /**
     * The device's serial number.
     */
    serial?: string;
    buildNumber?: number;
    secureId?: string;
    buildType?: Device.buildType;
    cpuId?: string;
    /**
     * The IMEI of the device
     */
    imei?: string;
    /**
     * The IMSI of the SIM in the device (if present)
     */
    imsi?: string;
    /**
     * The ICCID of the SIM in the device (if present)
     */
    simIccid?: string;
    deviceCertificate?: string;
    pedCertificate?: string;
    deviceTypeName?: string;
    productName?: string;
    /**
     * Whether this device has PIN prompt disabled.
     */
    pinDisabled?: boolean;
    offlinePayments?: boolean;
    offlinePaymentsAll?: boolean;
    offlinePaymentsLimit?: number;
    offlinePaymentsPromptThreshold?: number;
    offlinePaymentsTotalPaymentsLimit?: number;
    offlinePaymentsLimitDefault?: number;
    offlinePaymentsPromptThresholdDefault?: number;
    offlinePaymentsTotalPaymentsLimitDefault?: number;
    offlinePaymentsMaxLimit?: number;
    offlinePaymentsMaxTotalPaymentsLimit?: number;
    showOfflinePayments?: boolean;
    maxOfflineDays?: number;
    allowStoreAndForward?: boolean;
    secureReports?: Array<Reference>;
    bundleIndicator?: string;
    deviceType?: Reference;
};

export namespace Device {

    export enum buildType {
        ENG = 'ENG',
        USER = 'USER',
        USERDEBUG = 'USERDEBUG',
    }


}

