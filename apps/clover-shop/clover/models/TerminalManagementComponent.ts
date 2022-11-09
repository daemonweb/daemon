/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TerminalManagementStandard } from './TerminalManagementStandard';

export type TerminalManagementComponent = {
    type?: TerminalManagementComponent.type;
    itemNumber?: string;
    provider?: string;
    serial?: string;
    version?: string;
    identification?: string;
    /**
     * Standard and assessment info for the component
     */
    standard?: TerminalManagementStandard;
};

export namespace TerminalManagementComponent {

    export enum type {
        ACQUIRER_PROTOCOL_PARAMS = 'ACQUIRER_PROTOCOL_PARAMS',
        APPLICATION_PARAMS = 'APPLICATION_PARAMS',
        TERMINAL_PARAMS = 'TERMINAL_PARAMS',
        SECURITY_PARAMS = 'SECURITY_PARAMS',
        SERVER = 'SERVER',
        TERMINAL = 'TERMINAL',
        DEVICE = 'DEVICE',
        SECURE_MODULE = 'SECURE_MODULE',
        PAYMENT_APPLICATION = 'PAYMENT_APPLICATION',
        EMV_KERNEL = 'EMV_KERNEL',
        EMV_LEVEL1 = 'EMV_LEVEL1',
        MIDDLEWARE = 'MIDDLEWARE',
        DRIVER = 'DRIVER',
        OPERATING_SYSTEM = 'OPERATING_SYSTEM',
        MERCHANT_PARAMS = 'MERCHANT_PARAMS',
        CERTIFICATE_PARAMS = 'CERTIFICATE_PARAMS',
        TMS_PROTOCOL_PARAMS = 'TMS_PROTOCOL_PARAMS',
    }


}

