/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ServiceCharge = {
    /**
     * Unique identifier
     */
    id?: string;
    /**
     * Service charge name
     */
    name?: string;
    /**
     * If this service charge is enabled
     */
    enabled?: boolean;
    /**
     * Deprecated use percentageDecimal instead
     */
    percentage?: number;
    /**
     * Percent to charge times 10000, e.g. 12.5% will be 125000
     */
    percentageDecimal?: number;
    /**
     * If service charge was auto applied or not
     */
    isAutoApplied?: boolean;
};

