/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Gateway = {
    paymentProcessorName?: string;
    authorizationFrontEnd?: string;
    acquiringBackEnd?: string;
    paymentGatewayApi?: string;
    accountName?: string;
    altMid?: string;
    mid?: string;
    fns?: string;
    tid?: string;
    storeId?: string;
    supportsTipping?: boolean;
    frontendMid?: string;
    backendMid?: string;
    /**
     * Merchant Category Code
     */
    mcc?: string;
    tokenType?: string;
    groupId?: string;
    debitKeyCode?: string;
    sredCode?: string;
    supportsTipAdjust?: boolean;
    supportsNakedCredit?: boolean;
    supportsMultiPayToken?: boolean;
    /**
     * If true the gateway will allow an amount greater than the preauth amount to be captured.
     */
    supportsPreauthOverage?: boolean;
    closingTime?: string;
    telecheck_ica_mid?: string;
    telecheck_cbp_mid?: string;
    telecheck_ppd_mid?: string;
    newBatchCloseEnabled?: boolean;
    /**
     * Field to identify whether the payment processor is real or demo. 'true' is returned for real payment processsor. 'false' is returned for demo payment processor.
     */
    production?: boolean;
};

