/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TerminalManagementStandard = {
    /**
     * The compnent this standard applies to (e.g. C-2)
     */
    component?: string;
    /**
     * The standard identifier e.g. EMV ICC Specifications
     */
    identification?: string;
    /**
     * The standard version
     */
    version?: string;
    /**
     * The standard issuer
     */
    issuer?: string;
    /**
     * assessment type for the standard
     */
    type?: string;
    /**
     * the assessment assigner
     */
    assigner?: string;
    /**
     * approval number or other identifier for the assessment
     */
    assessmentIdentifier?: string;
};

